const runtime = () => {
  //   console.log(x); // ReferenceError: x is not defined
  //   let num = 10;
  //   num(); // TypeError: num is not a function
  //   let jsonString = "{name: 'John'}"; // Invalid JSON (single quotes)
  //   JSON.parse(jsonString); // SyntaxError: Unexpected token o in JSON at position 0
  // File not found error (Syntax error)
  //   const fs = require("fs");
  //   fsreadFileSync("nonexistanceFile.txt", "utf-8"); // Error: ENOENT: no such file or directory
};

module.exports = runtime;
