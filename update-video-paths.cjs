const fs = require('fs');
const path = require('path');

const directory = './';
const fileExtensions = ['.html', '.js', '.jsx', '.ts', '.tsx'];

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

function patchFile(filePath) {
  const ext = path.extname(filePath);
  if (!fileExtensions.includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  const updated = content.replace(/(["'`])\/([^\/\n]+?)\.mp4(\1)/gi, '$1/optimized/$2.mp4$1');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

walk(directory, patchFile);
