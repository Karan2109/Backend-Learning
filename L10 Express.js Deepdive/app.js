// // Core Modules
// const http = require("http");

// External Modules
const express = require("express");

// Internal/Local Modules
const requestHandler = require("./user");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<h1>Came from 1st Middleware</h1>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<h1>Welcome to Backend Learning</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<h1>Came from another Middleware</h1>");
});

// const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
