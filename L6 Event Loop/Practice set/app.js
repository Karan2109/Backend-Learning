const fs = require("fs");

console.log("1. Start of the script");

// Synchronous (Blocking) Operation
console.log("2. Reading the file synchronously");
const dataSync = fs.readFileSync("input.txt", "utf-8");
console.log("3. Data read synchronously");

// Asynchronous (Non-Blocking) Operation
console.log("4. Reading the file asynchronously");
fs.readFile("input.txt", "utf-8", (err, dataAsync) => {
  if (err) throw err;
  console.log("6. Data read asynchronously");
});
console.log("5. End of the script");
