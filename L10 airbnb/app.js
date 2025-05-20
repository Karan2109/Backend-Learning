// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouters");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);

app.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1> Register on airbnb </h1>
    <form action="/host/add-home" method="POST">
        <input type="text" name="Home_Name" placeholder="Enter your Home name"/>
        <input type="submit" value="Register"/>
    </form>
    `);
});

app.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Home Registered successfully </h1>
    <a href="/">Go to Home</a>  
    `);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
