const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const entriesToCopy = [
  'index.html',
  'about.html',
  'account.html',
  'payment-status.html',
  'style.css',
  'script.js',
  'components',
  'images',
  'products',
  'manifest.webmanifest',
  'service-worker.js'
];

/**
 * Recursively remove a directory if it exists.
 */
function clearDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath)) {
    const entryPath = path.join(dirPath, entry);
    const stat = fs.lstatSync(entryPath);
    if (stat.isDirectory()) {
      clearDir(entryPath);
      fs.rmdirSync(entryPath);
    } else {
      fs.unlinkSync(entryPath);
    }
  }
}

/**
 * Recursively copy files from source to destination directory.
 */
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function build() {
  console.log('→ Preparing dist directory');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  clearDir(distDir);

  for (const entry of entriesToCopy) {
    const srcPath = path.join(projectRoot, entry);
    if (!fs.existsSync(srcPath)) {
      console.warn(`⚠️  Skipping missing entry: ${entry}`);
      continue;
    }
    const destPath = path.join(distDir, entry);
    console.log(`→ Copying ${entry}`);
    copyRecursive(srcPath, destPath);
  }

  console.log('✓ Build complete. Files available in dist/');
}

build();
