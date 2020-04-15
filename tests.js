const convert = require("./main.js");

// console.log("00", convert.lessThan100("00"));
// for (let i = 0; i < 100; i++) console.log(i, convert.lessThan100(i));

// console.log("000", convert.lessThan1000("000"));
// for (let i = 0; i < 1000; i++) console.log(i, convert.lessThan1000(i));

// console.log("00000", convert.lessThan100000("00000"));
// for (let i = 0; i < 100000; i++) console.log(i, convert.lessThan100000(i));

console.log("0000000", convert.lessThan10000000("0000000"));
for (let i = 0; i < 10000000; i++) console.log(i, convert.lessThan10000000(i));
