const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 10000);
const HOST = '0.0.0.0';
const publicDir = path.resolve(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf'
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function safeResolve(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  const cleanPath = decoded.replace(/^\/+/, '');
  const resolved = path.resolve(publicDir, cleanPath);
  if (resolved !== publicDir && !resolved.startsWith(publicDir + path.sep)) return null;
  return resolved;
}

function sendFile(res, filePath, noStore = false) {
  fs.stat(filePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      sendJson(res, 404, { ok: false, error: 'Not found' });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Content-Length': stats.size,
      'X-Content-Type-Options': 'nosniff'
    };

    if (noStore) {
      headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, proxy-revalidate';
      headers.Pragma = 'no-cache';
      headers.Expires = '0';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    res.writeHead(200, headers);
    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) sendJson(res, 500, { ok: false, error: 'File read error' });
      else res.destroy();
    });
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const pathname = requestUrl.pathname;

  if (pathname === '/health') {
    sendJson(res, 200, { ok: true, app: 'ALL FINANCE SHARTNOMA FINAL v10.14' });
    return;
  }

  if (!['GET', 'HEAD'].includes(req.method || 'GET')) {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  let requestedPath = pathname === '/' ? '/index.html' : pathname;
  const candidate = safeResolve(requestedPath);
  if (!candidate) {
    sendJson(res, 400, { ok: false, error: 'Invalid path' });
    return;
  }

  fs.stat(candidate, (err, stats) => {
    if (!err && stats.isFile()) {
      const noStore = requestedPath === '/index.html' || requestedPath === '/config.js';
      sendFile(res, candidate, noStore);
      return;
    }

    // Single-page app fallback.
    sendFile(res, path.join(publicDir, 'index.html'), true);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`ALL FINANCE SHARTNOMA FINAL v10.14 running on http://${HOST}:${PORT}`);
});
