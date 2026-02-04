const fs = require('fs');
const path = require('path');

const directory = './';
const fileExtensions = ['.html', '.js', '.jsx', '.ts', '.tsx'];
const pattern = /(["'`])\/images\/([^\s"'`?]+?)\.(jpg|jpeg|png)(\1)/gi;

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
  const updated = content.replace(pattern, (_, quote, filename, ext) => {
    return `${quote}/images/${filename}.${ext}?preset=webp${quote}`;
  });

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

walk(directory, patchFile);
