const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../public/assets');

// Recursively walk through directory
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

console.log('Starting image compression in:', ASSETS_DIR);

const tasks = [];

walkDir(ASSETS_DIR, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip if it's already a webp file that we processed or not an image
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    return;
  }

  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  const dirName = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const webpPath = path.join(dirName, `${baseName}.webp`);

  const task = sharp(filePath)
    .webp({ quality: 75, effort: 6 })
    .toFile(webpPath)
    .then((info) => {
      const origSizeKb = (fs.statSync(filePath).size / 1024).toFixed(1);
      const webpSizeKb = (info.size / 1024).toFixed(1);
      console.log(`Compressed ${relativePath} (${origSizeKb} KB) -> ${path.basename(webpPath)} (${webpSizeKb} KB)`);
      
      // Delete the original png/jpg to keep the repo clean and avoid unused assets
      fs.unlinkSync(filePath);
    })
    .catch((err) => {
      console.error(`Error compressing ${relativePath}:`, err.message);
    });

  tasks.push(task);
});

Promise.all(tasks).then(() => {
  console.log('All image assets successfully compressed to WebP!');
}).catch(err => {
  console.error('Error during image compression:', err);
});
