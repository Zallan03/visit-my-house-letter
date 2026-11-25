// Convince the AI Judge to Visit Your House: A Letter in One Image
// Copies the invitation image letter.jpg to <outDir>/entry.png.
// Deterministic: byte-for-byte copy, no network, no randomness, no clock.
// The gate accepts a whole PNG or JPEG at most 1 MiB and 1024x1024 px;
// letter.jpg is a 1024x1024 JPEG of 182,393 bytes (a PNG of the same photo
// is 1,136,649 bytes and would fail the 1 MiB gate), so the JPEG is shipped.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

const outDir = process.argv[2] ?? "/output";
const src = join(HERE, "letter.jpg");
if (statSync(src).size > 1048576) {
  throw new Error("letter.jpg exceeds the 1 MiB gate");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
