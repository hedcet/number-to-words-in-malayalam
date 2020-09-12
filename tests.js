const converter = require("./main.js");

console.log("00000000000000000000", converter.toWords("00000000000000000000"));

for (let i = 0; i < 16; i++) {
  const randomNumber = `${Math.random()}`.substr(2, i + 1);
  console.log(randomNumber, converter.toWords(randomNumber));
}
