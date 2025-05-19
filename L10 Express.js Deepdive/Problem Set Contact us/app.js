const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy middleware", req.url, req.method);
  next();
});

// app.use("/", (req, res, next) => {
//   console.log("Third Dummy middleware", req.url, req.method);
//   res.send("<h1>Dummy middleware</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET method", req.url, req.method);
  res.send(`<h1>Welcome to Home Page</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET method", req.url, req.method);
  res.send(`
    <h1>Provide your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="username" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <input type="submit" value="Submit"/>
    </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("First Handling", req.url, req.method, req.body);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log(
    "Handling /contact-us for POST method",
    req.url,
    req.method,
    req.body
  );
  res.send(`<h1>Thanks for contacting us, we'll get back to you shortly</h1>`);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
