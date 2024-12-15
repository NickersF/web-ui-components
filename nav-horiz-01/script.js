let navItems = document.querySelectorAll(".nav-item");

// Add a click event to each nav
navItems.forEach(item => {
    item.addEventListener("click", () => {
        // Toggle the active class for each nav-item on click
       navItems.forEach(item => item.classList.remove("active"));
       item.classList.add("active");
    });
});