const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/resolve", (req, res) => {
  res.json({
    trigger: "food",
    merchant: "dominos",
    category: "pizza"
  });
});

app.post("/detect", (req, res) => {
  res.json({
    detected: true
  });
});

app.post("/reply", (req, res) => {
  res.json({
    message: "Hello from bot"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
