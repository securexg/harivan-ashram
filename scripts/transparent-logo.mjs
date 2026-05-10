#!/usr/bin/env node
/**
 * Convert near-white pixels in the AOL logo to true alpha so the PNG sits
 * cleanly over both light and dark backgrounds (no visible white box).
 */
import sharp from "sharp";
import { resolve } from "node:path";

const SRC = resolve("src/assets/aol-logo.original.png");
const OUT = resolve("src/assets/aol-logo.png");

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .trim({ background: "white", threshold: 30 })
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

// White-to-alpha threshold; anything brighter than this becomes transparent,
// anything below blends linearly between full-opaque and full-transparent.
const HARD = 246; // fully transparent above
const SOFT = 200; // fully opaque below

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const lum = Math.min(r, g, b);
  if (lum >= HARD) {
    out[i + 3] = 0;
  } else if (lum > SOFT) {
    const t = (lum - SOFT) / (HARD - SOFT); // 0..1
    out[i + 3] = Math.round(255 * (1 - t));
  }
}

await sharp(out, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`Wrote transparent logo: ${width}x${height} → ${OUT}`);
