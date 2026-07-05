const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;
const publicDir = path.join(__dirname, 'public');

app.disable('x-powered-by');
app.use(express.static(publicDir, {
  extensions: ['html'],
  maxAge: '1h'
}));

app.get('/health', (_req, res) => {
  res.json({ ok: true, app: 'ALL FINANCE CONTRACT v5.0' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ALL FINANCE CONTRACT running on port ${PORT}`);
});
