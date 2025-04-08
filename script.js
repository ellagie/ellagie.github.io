// Function to toggle the hamburger menu
function toggleMenu() {
    // Select the elements for the menu and hamburger icon
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the "open" class on the menu and icon to show/hide the menu
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
