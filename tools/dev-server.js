#!/usr/bin/env node

const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const projectRoot = path.resolve(__dirname, '..');
const staticRoot = path.resolve(projectRoot, process.argv[2] || '.');
const port = Number(process.env.PORT || 4173);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function getFilePath(requestUrl) {
  const parsed = url.parse(requestUrl);
  const sanitized = path.normalize(parsed.pathname).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(staticRoot, sanitized);

  if (filePath.endsWith(path.sep)) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    const maybeHtml = `${filePath}.html`;
    if (fs.existsSync(maybeHtml)) {
      return maybeHtml;
    }
  }

  return filePath;
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Internal Server Error');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const filePath = getFilePath(req.url);
  if (!filePath.startsWith(staticRoot)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  const indexPath = path.join(staticRoot, 'index.html');
  if (fs.existsSync(indexPath)) {
    sendFile(res, indexPath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
});

server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
  console.log(`Serving files from ${staticRoot}`);
});
