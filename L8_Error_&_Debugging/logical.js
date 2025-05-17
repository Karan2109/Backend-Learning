const logicalError = () => {
  let x = 5;
  if ((x = 10)) {
    // Assignment instead of comparison
    console.log(`x is ${x}`); // Incorrectly prints this
  } else {
    console.log("x is not 10");
  }
};

module.exports = logicalError;

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i]); // Print undefined at the end becoz of <= operator
// }

// let num = "10";
// console.log(num + 5); // Concatenation becoz of string
