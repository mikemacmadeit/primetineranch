// replace-image-paths.js

const fs = require('fs');
const path = require('path');

const directory = './'; // Start from project root
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

function replaceInFile(filePath) {
  const ext = path.extname(filePath);
  if (!fileExtensions.includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  const replaced = content.replace(/\/images\/all\/([\w-]+)\.(jpg|jpeg|png)/gi, '/images/webp/all/$1.webp');

  if (replaced !== content) {
    fs.writeFileSync(filePath, replaced, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

walk(directory, replaceInFile);
