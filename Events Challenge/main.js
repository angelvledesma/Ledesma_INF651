const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinatesDiv = document.getElementById("coordinates");

submitButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    outputDiv.textContent = "Error: Please enter a name.";
    outputDiv.style.backgroundColor = "red";
    outputDiv.style.color = "white";
  } else {
    outputDiv.textContent = `Welcome, ${name}!`;
    outputDiv.style.backgroundColor = "green";
    outputDiv.style.color = "white";
  }
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitButton.click();
  }
});

mouseTracker.addEventListener("mousemove", (event) => {
  const rect = mouseTracker.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});
