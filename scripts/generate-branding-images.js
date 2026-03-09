/**
 * Generates optimized branding images from logo-original.png and logo-original-with-text.png
 * Run: node scripts/generate-branding-images.js
 *
 * Output sizes (from research):
 * - favicon.ico: 16x16, 32x32 (multi-size ICO)
 * - favicon-16x16.png, favicon-32x32.png: PNG fallbacks
 * - apple-touch-icon.png: 180x180 (iOS home screen)
 * - android-chrome-192x192.png: 192x192 (PWA)
 * - android-chrome-512x512.png: 512x512 (PWA splash)
 * - og-image.png: 1200x630 (Open Graph - Facebook, Twitter, LinkedIn)
 * - logo-with-text.png: header logo for src/assets/images
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const ASSETS = path.join(ROOT, 'src', 'assets', 'images');
const SOURCES = path.join(__dirname, 'sources');
const LOGO_SRC = path.join(SOURCES, 'logo-original.png');
const LOGO_WITH_TEXT_SRC = path.join(SOURCES, 'logo-original-with-text.png');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  console.log('Generating branding images...\n');

  if (!fs.existsSync(LOGO_SRC) || !fs.existsSync(LOGO_WITH_TEXT_SRC)) {
    console.error('Source images not found:', { LOGO_SRC, LOGO_WITH_TEXT_SRC });
    process.exit(1);
  }

  // 1. Favicon and icons (from logo WITHOUT text)
  console.log('1. Favicons & icons (logo without text):');
  await ensureDir(PUBLIC);

  await sharp(LOGO_SRC).resize(16, 16).png().toFile(path.join(PUBLIC, 'favicon-16x16.png'));
  console.log('  ✓ favicon-16x16.png');
  await sharp(LOGO_SRC).resize(32, 32).png().toFile(path.join(PUBLIC, 'favicon-32x32.png'));
  console.log('  ✓ favicon-32x32.png');

  // Favicon.ico - try png-to-ico
  try {
    const pngToIco = require('png-to-ico');
    const buf16 = await sharp(LOGO_SRC).resize(16, 16).png().toBuffer();
    const buf32 = await sharp(LOGO_SRC).resize(32, 32).png().toBuffer();
    const icoBuf = await pngToIco([buf16, buf32]);
    fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), icoBuf);
  } catch {
    fs.copyFileSync(path.join(PUBLIC, 'favicon-32x32.png'), path.join(PUBLIC, 'favicon.ico'));
  }
  console.log('  ✓ favicon.ico');

  await sharp(LOGO_SRC).resize(180, 180).png().toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
  console.log('  ✓ apple-touch-icon.png (180x180)');

  await sharp(LOGO_SRC).resize(192, 192).png().toFile(path.join(PUBLIC, 'android-chrome-192x192.png'));
  console.log('  ✓ android-chrome-192x192.png');

  await sharp(LOGO_SRC).resize(512, 512).png().toFile(path.join(PUBLIC, 'android-chrome-512x512.png'));
  console.log('  ✓ android-chrome-512x512.png');

  // 2. OG image 1200x630 (logo centered on background)
  console.log('\n2. Open Graph image (1200x630):');
  const logoBuf = await sharp(LOGO_SRC).resize(400, 400).png().toBuffer();
  const ogPath = path.join(PUBLIC, 'og-image.png');
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: { r: 255, g: 255, b: 255 } },
  })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png()
    .toFile(ogPath);
  console.log('  ✓ og-image.png');

  // 3. Header logo (WITH text) -> src/assets/images
  console.log('\n3. Header logo (with text):');
  await ensureDir(ASSETS);
  const headerLogoPath = path.join(ASSETS, 'logo-with-text.png');
  await sharp(LOGO_WITH_TEXT_SRC)
    .resize(320, 320) // 2x for retina, reasonable header size
    .png({ quality: 90 })
    .toFile(headerLogoPath);
  console.log('  ✓ src/assets/images/logo-with-text.png');

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
