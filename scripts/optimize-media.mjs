#!/usr/bin/env node
/**
 * Harivan Ashram — media optimization pipeline.
 *
 * Inputs:   source-media/ (raw photos and videos)
 * Outputs:  public/images/<event>/*.webp     (high quality, fixed-width responsive)
 *           public/videos/reels/*.{mp4,webm} (re-encoded for web autoplay)
 *           public/videos/reels/posters/*.webp (poster frames)
 *
 * Run:      npm run optimize:media
 */

import { execSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { extname, join, basename, resolve } from "node:path";
import sharp from "sharp";

const ROOT = resolve(process.cwd());
const SRC = join(ROOT, "source-media");
const OUT_IMG = join(ROOT, "public", "images");
const OUT_VID = join(ROOT, "public", "videos");

const PHOTO_EXT = new Set([".jpg", ".jpeg", ".png", ".heic", ".webp"]);
const VIDEO_EXT = new Set([".mp4", ".mov", ".webm"]);

const PHOTO_WIDTHS = [640, 1024, 1600, 2400];
const PHOTO_QUALITY = 82; // visually lossless on photos

function ensure(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => !f.startsWith("."))
    .map((f) => join(dir, f))
    .filter((p) => statSync(p).isFile());
}

async function processPhoto(srcFile, destDir, slug) {
  const baseName = slug || basename(srcFile, extname(srcFile));
  ensure(destDir);

  const tasks = PHOTO_WIDTHS.map(async (w) => {
    const out = join(destDir, `${baseName}-${w}.webp`);
    if (existsSync(out)) return out;
    await sharp(srcFile, { failOn: "none" })
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: PHOTO_QUALITY, effort: 5 })
      .toFile(out);
    return out;
  });

  // Default (full-size, capped at 2400)
  const defaultOut = join(destDir, `${baseName}.webp`);
  if (!existsSync(defaultOut)) {
    await sharp(srcFile, { failOn: "none" })
      .rotate()
      .resize({ width: 2400, withoutEnlargement: true })
      .webp({ quality: PHOTO_QUALITY, effort: 5 })
      .toFile(defaultOut);
  }
  await Promise.all(tasks);
  return baseName;
}

function ffprobeFps(file) {
  try {
    const out = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of default=nokey=1:noprint_wrappers=1 "${file}"`,
      { encoding: "utf8" },
    ).trim();
    return out;
  } catch {
    return "30/1";
  }
}

function hasAudioStream(file) {
  try {
    const out = execSync(
      `ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "${file}"`,
      { encoding: "utf8" },
    ).trim();
    return out.length > 0;
  } catch {
    return false;
  }
}

async function processVideo(srcFile, destDir, slug) {
  ensure(destDir);
  const baseName = slug || basename(srcFile, extname(srcFile));
  const mp4 = join(destDir, `${baseName}.mp4`);
  const webm = join(destDir, `${baseName}.webm`);
  const posterDir = join(destDir, "posters");
  ensure(posterDir);
  const poster = join(posterDir, `${baseName}.webp`);

  const audio = hasAudioStream(srcFile);
  const map = audio ? "-map 0:v:0 -map 0:a:0" : "-map 0:v:0";
  const aencMp4 = audio ? "-c:a aac -b:a 96k" : "-an";
  const aencWebm = audio ? "-c:a libopus -b:a 96k" : "-an";

  if (!existsSync(mp4)) {
    // h264 720p, keep audio when present (unmute in browser), faststart for streaming
    const cmd = `ffmpeg -y -i "${srcFile}" ${map} -vf "scale='min(720,iw)':-2:flags=lanczos" -c:v libx264 -preset medium -crf 24 -movflags +faststart -pix_fmt yuv420p ${aencMp4} "${mp4}"`;
    execSync(cmd, { stdio: "inherit" });
  }

  if (!existsSync(webm)) {
    const cmd = `ffmpeg -y -i "${srcFile}" ${map} -vf "scale='min(720,iw)':-2:flags=lanczos" -c:v libvpx-vp9 -crf 32 -b:v 0 -row-mt 1 -threads 4 -deadline good -cpu-used 2 ${aencWebm} "${webm}"`;
    execSync(cmd, { stdio: "inherit" });
  }

  if (!existsSync(poster)) {
    const cmd = `ffmpeg -y -ss 1 -i "${srcFile}" -frames:v 1 -vf "scale='min(720,iw)':-2:flags=lanczos" -q:v 2 -f image2pipe -vcodec mjpeg pipe:1 | sharp_unused`;
    // Use sharp instead by piping the frame through ffmpeg to a tmp jpg then converting
    const tmpJpg = join(posterDir, `${baseName}.tmp.jpg`);
    execSync(
      `ffmpeg -y -ss 1 -i "${srcFile}" -frames:v 1 -vf "scale='min(720,iw)':-2:flags=lanczos" -q:v 2 "${tmpJpg}"`,
      { stdio: "inherit" },
    );
    await sharp(tmpJpg)
      .webp({ quality: 78, effort: 5 })
      .toFile(poster);
    execSync(`rm -f "${tmpJpg}"`);
  }

  return baseName;
}

async function processFolder(srcSubdir, outName, options = {}) {
  const srcDir = join(SRC, srcSubdir);
  if (!existsSync(srcDir)) {
    console.log(`· skipping (not found): ${srcSubdir}`);
    return;
  }
  const files = listFiles(srcDir).sort();
  console.log(`\n→ ${srcSubdir}  (${files.length} files)  →  ${outName}`);

  const photos = files.filter((f) => PHOTO_EXT.has(extname(f).toLowerCase()));
  const videos = files.filter((f) => VIDEO_EXT.has(extname(f).toLowerCase()));

  if (photos.length) {
    const destDir = join(OUT_IMG, outName);
    let i = 0;
    for (const file of photos) {
      i += 1;
      const slug = options.namedSlugs
        ? options.namedSlugs[i - 1] ?? `photo-${String(i).padStart(2, "0")}`
        : `photo-${String(i).padStart(2, "0")}`;
      process.stdout.write(`  · photo ${i}/${photos.length} ${basename(file)} … `);
      const startedAt = Date.now();
      try {
        await processPhoto(file, destDir, slug);
        console.log(`done (${Date.now() - startedAt}ms)`);
      } catch (err) {
        console.error(`FAILED: ${err.message}`);
      }
    }
  }

  if (videos.length) {
    if (!options.videoSlugs?.length) {
      console.log(
        `  · skipping ${videos.length} video file(s) in ${srcSubdir} (only folders with videoSlugs are encoded — e.g. Reel Videos).`,
      );
    } else {
    const destDir = join(OUT_VID, outName);
    let i = 0;
    for (const file of videos) {
      i += 1;
      const slug = options.videoSlugs
        ? options.videoSlugs[i - 1] ?? `video-${String(i).padStart(2, "0")}`
        : `video-${String(i).padStart(2, "0")}`;
      process.stdout.write(`  · video ${i}/${videos.length} ${basename(file)} … `);
      try {
        await processVideo(file, destDir, slug);
        console.log("done");
      } catch (err) {
        console.error(`FAILED: ${err.message}`);
      }
    }
    }
  }
}

async function main() {
  ensure(OUT_IMG);
  ensure(OUT_VID);

  await processFolder("Navratri", "activities/navratri");
  await processFolder("Shobha Yatra", "activities/shobha-yatra");
  await processFolder("Gurudev", "gurudev", { namedSlugs: ["portrait"] });
  await processFolder("Reel Videos", "reels", {
    videoSlugs: ["reel-1", "reel-2", "reel-3", "reel-4"],
  });
  await processFolder("Smiling Faces", "activities/smiling-faces");

  const yltpSrc = join(SRC, "1-may-YLTP-sri sri-4 (1).mp4");
  if (existsSync(yltpSrc)) {
    console.log("\n→ YLTP teaser (source root)");
    await processVideo(yltpSrc, join(OUT_VID, "yltp"), "yltp-teaser");
  }

  console.log("\n✓ media optimization complete");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
