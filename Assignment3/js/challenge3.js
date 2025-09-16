"use strict";
let number = prompt("Please enter a number between 1-10");
number = Number(number);

for (let i = 1; i <= 10; i++) {
  if ((number * i) % 5 === 0) {
    continue;
  }
  console.log(`${number} * ${i} = ${number * i}`);
}
