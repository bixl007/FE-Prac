const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  if (nameInput.value.trim() === "") {
    event.preventDefault();
    alert("Name field cannot be empty.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
    return;
  }

  if (passwordInput.value.length < 6) {
    event.preventDefault();
    alert("Password must be at least 6 characters long.");
  }
});
