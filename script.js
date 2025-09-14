// ======================
// Part 2: Functions & Scope
// ======================

// Global variable to track attempts
let formAttempts = 0;

// Function to validate input field
function validateField(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  if (field.value.trim() === "") {
    return errorMessage;
  }
  return "";
}

// Function to display success message in modal
function showSuccessMessage(name) {
  document.getElementById("successMessage").textContent =
    `🎉 Registration successful! Welcome, ${name}.`;
}

// ======================
// Part 3: Form Validation + Animation Trigger
// ======================
const form = document.getElementById("registrationForm");
const animateBox = document.getElementById("animateBox");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  formAttempts++;

  let errors = "";
  errors += validateField("name", "Name is required.\n");
  errors += validateField("email", "Email is required.\n");
  errors += validateField("password", "Password is required.\n");

  if (errors) {
    alert("⚠️ Please fix the following:\n" + errors);
    return;
  }

  // Trigger animation on the box
  animateBox.classList.add("animate");
  setTimeout(() => animateBox.classList.remove("animate"), 1000);

  // Show modal with success message
  const name = document.getElementById("name").value;
  showSuccessMessage(name);
  modal.style.display = "flex";
});

// Close modal button
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});
