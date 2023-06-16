
 // Get the necessary elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'hidden' class on the menu container
  menu.classList.toggle('hidden');
});
