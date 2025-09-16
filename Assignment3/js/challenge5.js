"use strict";

let month = prompt("Please enter a number between 1-12");

// Convert input to a number (prompt returns a string)
month = Number(month);

while (month < 1 || month > 12) {
  month = Number(prompt("Try again (1 - 12)"));
}

switch (month) {
  case 1:
    alert(`Your month (${month}) is January`);
    break;
  case 2:
    alert(`Your month (${month}) is February`);
    break;
  case 3:
    alert(`Your month (${month}) is March`);
    break;
  case 4:
    alert(`Your month (${month}) is April`);
    break;
  case 5:
    alert(`Your month (${month}) is May`);
    break;
  case 6:
    alert(`Your month (${month}) is June`);
    break;
  case 7:
    alert(`Your month (${month}) is July`);
    break;
  case 8:
    alert(`Your month (${month}) is August`);
    break;
  case 9:
    alert(`Your month (${month}) is September`);
    break;
  case 10:
    alert(`Your month (${month}) is October`);
    break;
  case 11:
    alert(`Your month (${month}) is November`);
    break;
  case 12:
    alert(`Your month (${month}) is December`);
    break;
  default:
    break;
}
