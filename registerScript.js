const signUpForm = document.getElementById("myForm");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent actual form submission

  // Use event.target to reference the form
  const formData = new FormData(event.target);

  // Convert FormData to a plain object (optional)
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log("Form Data:", data);

  // Example: Access individual values

  console.log("Name:", data.name);
  console.log("Email:", data.email);
  console.log("Password:", data.Password);
});

function togglePassword() {
  const input = document.getElementById("passwordInput");
  if (input.type === "password") {
    input.type = "text"; // Show password
  } else {
    input.type = "password"; // Hide password
  }
}
