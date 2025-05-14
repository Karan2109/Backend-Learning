const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  //   process.exit(); // Stops event loop
  //   res.setHeader("Content-Type", "json");
  if (req.url === "/") {
    // Routing request
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Enter Yout Details:</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'/><br>"
    );
    res.write("<label for='male'>Male</label>");
    res.write(
      "<input type='radio' id='male' name='gender' value='male' /><br>"
    );
    res.write("<label for='female'>Female</label>");
    res.write(
      "<input type='radio' id='female' name='gender' value='female' /><br>"
    );
    res.write("<input type='submit' vlaue='Submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      //   console.log(chunk.toString());
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      //   const bodyObject = {};
      //   for (const [key, value] of params.entries()) {
      //     bodyObject[key] = value;
      //   }
      const bodyObject = Object.fromEntries(params.entries());
      console.log(bodyObject);
      fs.writeFileSync("user-details.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302; // 302 for redirect
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>This is my first backend page</title></head>");
  res.write("<body><h1>Welcome to my first backend page</h1></body>");
  res.write("</html>");
  return res.end();
};

module.exports = userRequestHandler;
