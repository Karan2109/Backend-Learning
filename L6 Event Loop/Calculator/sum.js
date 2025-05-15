const sumRequestHandler = (req, res) => {
  console.log("1. In sum Request Handler", req.url);

  const body = [];
  let result;
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. Chunk received");
  });
  req.on("end", () => {
    console.log("3. End of request");

    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params.entries());
    result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
  });
  console.log("4. Sending the response");

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
};

module.exports = sumRequestHandler;
