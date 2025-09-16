"use strict";

function numberInformation() {
  let num = prompt(`Enter a number`);
  num = Number(num);

  if (num === 0) {
    alert(`The number ${num} is zero!`);
  } else if (num < 0) {
    alert(`The number ${num} is negative!`);
  } else {
    alert(`The number ${num} is postitive!`);
  }
}

numberInformation();

let buttonAgain = document.getElementById("buttonEnter");

buttonAgain.addEventListener("click", () => {
  numberInformation();
});
