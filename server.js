const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to HookFlow!",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "HookFlow server is running",
  });
});

app.listen(3000, () => {
  console.log("HookFlow running on http://localhost:3000");
});