const sumRequestHandler = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
        <head>
            <title>Practice Set</title>
        </head>
        <body>
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go To Calculator</a>
        </body>
    </html>
    `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
        <head>
            <title>Pracctice Set</title>
        </head>
        <body>
            <h1>Here is the Calculator</h1>
            <form action="/calculate-result" method="POST">
                <input type="number" name="num1" placeholder="Enter First Number"/>
                <input type="number" name="num2" placeholder="Enter Second Number"/>
                <input type="submit" value="sum">
            </form>
        </body>
    </html>
    `);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
        <head>
            <title>Practice Set</title>
        </head>
        <body>
            <h1>404 Page doesn not exist</h1>
            <a href="/">Go To Home Page</a>
        </body>
    </html>
    `);
  return res.end();
};

module.exports = requestHandler;
