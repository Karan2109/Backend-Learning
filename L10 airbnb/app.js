// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouters");
const hostRouter = require("./routes/hostRoutes");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
