const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;
const publicDir = path.join(__dirname, 'public');

app.disable('x-powered-by');

// index.html va config.js yangilanganda eski cache loginni buzmasligi uchun.
app.use((req, res, next) => {
  if (req.path === '/' || req.path === '/index.html' || req.path === '/config.js') {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  }
  next();
});

app.use(express.static(publicDir, {
  extensions: ['html'],
  maxAge: '1d',
  setHeaders(res, filePath) {
    if (filePath.endsWith('index.html') || filePath.endsWith('config.js')) {
      res.setHeader('Cache-Control', 'no-store');
    }
  }
}));

app.get('/health', (_req, res) => {
  res.json({ ok: true, app: 'ALL FINANCE CONTRACT v8.1' });
});

app.get('*', (_req, res) => {
  res.set('Cache-Control', 'no-store');
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ALL FINANCE CONTRACT v8.1 running on port ${PORT}`);
});
