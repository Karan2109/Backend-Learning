// Core Module
const path = require("path");

// External Modules
const express = require("express");

// Local Modules
const rootDir = require("../utils/pathUtil");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views/homeAdded.html"));
});

module.exports = hostRouter;
