const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit(); // Stops event loop
  //   res.setHeader("Content-Type", "json");
  if (req.url === "/") {
    // Routing request
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Welcome to my Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>This is my about page</title></head>");
    res.write("<body><h1>This is my about page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>This is my first backend page</title></head>");
  res.write("<body><h1>Welcome to my first backend page</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
