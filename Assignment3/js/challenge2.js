"use strict";

// Generate random PIN as number
let correctPin = Math.floor(Math.random() * 9999) + 1;

// Convert to string and pad with leading zeros until length is 4
correctPin = correctPin.toString();
while (correctPin.length !== 4) {
  correctPin = "0" + correctPin;
}

console.log(`====Challenge 2==========`);
console.log(`Correct pin is: ${correctPin}`);
console.log(`=========================`);

let userGuess;

do {
  userGuess = prompt("Enter a 4-digit PIN:");

  if (userGuess === null) {
    alert("Canceled");
    break;
  }

  if (userGuess.length !== 4) {
    alert("Please enter a 4 digit code");
    continue;
  }

  if (userGuess === correctPin) {
    alert(`You guessed the pin ${correctPin} correctly!`);
  } else if (Number(userGuess) > Number(correctPin)) {
    alert("Your guess is too high!");
  } else {
    alert("Your guess is too low!");
  }
} while (userGuess !== correctPin);
