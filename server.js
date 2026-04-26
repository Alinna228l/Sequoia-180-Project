const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const INDEX_FILE = 'SPC_Execution_Toolkit.html';
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

function serveFile(res, filePath) {
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      return send(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Not Found');
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': stat.size,
      'Cache-Control': 'public, max-age=300',
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname);
  } catch {
    return send(res, 400, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Bad Request');
  }

  if (urlPath === '/' || urlPath === '/index.html') {
    return serveFile(res, path.join(ROOT, INDEX_FILE));
  }

  if (urlPath === '/healthz') {
    return send(res, 200, { 'Content-Type': 'text/plain; charset=utf-8' }, 'ok');
  }

  const safeRel = path.normalize(urlPath).replace(/^([/\\])+/, '');
  const resolved = path.resolve(ROOT, safeRel);
  if (!resolved.startsWith(ROOT + path.sep) && resolved !== ROOT) {
    return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Forbidden');
  }

  const base = path.basename(resolved);
  if (base === '.git' || base === '.env' || base.startsWith('.env.')) {
    return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Forbidden');
  }

  serveFile(res, resolved);
});

server.listen(PORT, () => {
  console.log(`SPC Toolkit server listening on port ${PORT}`);
});
