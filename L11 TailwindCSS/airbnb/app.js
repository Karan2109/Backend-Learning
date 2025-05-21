//core Module
const path = require("path");

// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouters");
const hostRouter = require("./routes/hostRoutes");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "./views/404.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
