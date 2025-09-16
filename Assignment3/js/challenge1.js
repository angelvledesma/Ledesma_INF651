"use strict";

let run = true;
let num = 1;
while (run) {
  if (isEven(num)) {
    console.log(`Number ${num} is even`);
  }
  if (num == 50) {
    run = false;
  }
  num++;
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
}
