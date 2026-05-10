#!/usr/bin/env node
/**
 * Trim white background around the AOL logo so it sits cleanly
 * over both light and dark backgrounds.
 */
import sharp from "sharp";
import { resolve } from "node:path";
import { copyFileSync } from "node:fs";

const ROOT = resolve(process.cwd());
const SRC = resolve(ROOT, "src/assets/aol-logo.png");
const BACKUP = resolve(ROOT, "src/assets/aol-logo.original.png");
const TMP = resolve(ROOT, "src/assets/aol-logo.trimmed.png");

try {
  copyFileSync(SRC, BACKUP);
} catch {}

await sharp(SRC)
  .trim({ background: "white", threshold: 30 })
  .png({ compressionLevel: 9 })
  .toFile(TMP);

copyFileSync(TMP, SRC);

const meta = await sharp(SRC).metadata();
console.log(`Trimmed logo to ${meta.width}x${meta.height}`);
