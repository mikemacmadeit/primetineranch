const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, 'public', 'optimized');
const tempDir = path.join(__dirname, 'public', 'optimized-temp');

// Create temp dir if it doesn't exist
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

// Find all .mp4 files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.mp4'));

files.forEach(file => {
  const input = path.join(inputDir, file);
  const output = path.join(tempDir, file);
  const ffmpegPath = `"C:\\Users\\micha\\Downloads\\ffmpeg-7.1.1-essentials_build\\ffmpeg-7.1.1-essentials_build\\bin\\ffmpeg.exe"`;
const cmd = `${ffmpegPath} -i "${input}" -vcodec libx264 -crf 28 -preset slow -movflags +faststart "${output}" -y`;

  console.log(`⏳ Compressing ${file}...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✅ Compressed: ${file}`);
  } catch (e) {
    console.error(`❌ Failed: ${file}`, e);
  }
});

// Replace original files
files.forEach(file => {
  fs.renameSync(path.join(tempDir, file), path.join(inputDir, file));
});

fs.rmdirSync(tempDir);
console.log('🎉 All videos compressed and replaced!');
