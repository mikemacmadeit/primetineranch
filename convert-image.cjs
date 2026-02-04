// convert-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'raw-images');
const outputDir = path.join(__dirname, 'public', 'optimized-images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files in the raw-images folder
fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);

  // Skip non-image files
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const inputPath = path.join(inputDir, file);

  // Remove the original extension from output filename
  const outputFileName = `${name.replace(/\.[^/.]+$/, '')}.webp`;
  const outputPath = path.join(outputDir, outputFileName);

  sharp(inputPath)
    .resize({ width: 1600 })
    .webp({ quality: 75 })
    .toFile(outputPath)
    .then(() => console.log(`✅ Converted: ${file} → ${outputFileName}`))
    .catch(err => console.error(`❌ Failed: ${file}`, err));
});
