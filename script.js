function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("show");
}

// Close the mobile menu when clicking outside
document.body.addEventListener('click', function (event) {
    const menu = document.getElementById("mobile-menu");
    const hamburger = document.querySelector(".hamburger");

    // Check if the click is outside the mobile menu and hamburger icon
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show");
    }
});