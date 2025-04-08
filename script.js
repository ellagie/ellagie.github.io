// Selecting necessary elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Function to toggle the menu
function toggleMenu() {
    // Toggle the 'active' class on the hamburger menu
    hamburgerMenu.classList.toggle('active');

    // Toggle the visibility of the navigation links
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}

// Event listener for hamburger menu click
hamburgerMenu.addEventListener('click', toggleMenu);
