const sumRequestHandler = (req, res) => {
  console.log("In sum Request Handler", req.url);

  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params.entries());
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
        <head>
            <title>Practice Set</title>
        </head>
        <body>
            <h1>Your sum is ${result}</h1>
        </body>
    </html>
    `);
    return res.end();
  });
};

module.exports = sumRequestHandler;
