console.log("1. Start of the script");

// Microtask queue (Promise)
Promise.resolve().then(() => {
  console.log("2. Microtask queue 1");
});

// Timer queue
setTimeout(() => {
  console.log("3. Timer queue 1");
}, 0);

// I/O queue
const fs = require("fs");
fs.readFile("input.txt", "utf-8", () => {
  console.log("4. I/O operation");
});

// Check queue
setImmediate(() => {
  console.log("5. Check queue");
});

// close queue
process.on("exit", (code) => {
  console.log("6. Close queue");
});

// Macrotask queue
console.log("7. Macrotask queue");
