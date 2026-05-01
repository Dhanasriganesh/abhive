import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsRoot = path.resolve('src/assets');

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = filePath.slice(0, -ext.length);
  const webpPath = `${base}.webp`;

  if (fs.existsSync(webpPath)) {
    return;
  }

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log(`Converted to webp: ${filePath} -> ${webpPath}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        await convertImage(fullPath);
      }
    }
  }
}

async function main() {
  console.log(`Converting images under: ${assetsRoot}`);
  await walk(assetsRoot);
  console.log('WebP conversion complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});







