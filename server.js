const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;
const publicPath = path.join(__dirname, "public");

app.disable("x-powered-by");

// Platforma fayllari
app.use(express.static(publicPath));

// Faqat server holatini tekshirish
app.get("/health", (req, res) => {
  res.status(200).json({
    ok: true,
    app: "ALL FINANCE CONTRACT v4.2"
  });
});

// Asosiy sahifa
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Boshqa ichki manzillar
app.use((req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ALL FINANCE CONTRACT ${PORT} portda ishga tushdi`);
});
