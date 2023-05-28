//your code here
// Get the necessary elements from the DOM
const appElement = document.getElementById("app");
const pElement = document.getElementById("ptag");
const swapButton = document.querySelector("button");

// Add event listener to the button
swapButton.addEventListener("click", swapTheme);

// Function to swap the theme
function swapTheme() {
  // Toggle the 'night' class on the appElement
  appElement.classList.toggle("night");

  // Toggle the 'button_night' class on the swapButton
  swapButton.classList.toggle("button_night");

  // Update the text content of the pElement based on the theme
  if (appElement.classList.contains("night")) {
    pElement.textContent = "I am an AccioJob student, ready to become an awesome full stack developer in the dark!";
  } else {
    pElement.textContent = "I am an AccioJob student, ready to become an awesome full stack developer.";
  }
}
