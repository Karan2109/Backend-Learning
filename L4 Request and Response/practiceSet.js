const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Myntra</title></head><body>");

  if (req.url === "/") {
    // Homepage with links
    res.write("<h1>Welcome to my Home Page</h1>");
    res.write("<a href='/home'>Home</a><br>");
    res.write("<a href='/women'>Women</a><br>");
    res.write("<a href='/men'>Men</a><br>");
    res.write("<a href='/kids'>Kids</a><br>");
    res.write("<a href='/cart'>Cart</a><br>");
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to my Women Page</h1>");
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to my Men Page</h1>");
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to my Kids Page</h1>");
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to my Cart Page</h1>");
  } else {
    res.write("<h1>404 - Page Not Found</h1>");
  }

  res.write("</body></html>");
  res.end();
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
