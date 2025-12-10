function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  formMessage.textContent = "";

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email.";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
