// This is by far the easiest way I've found to toggle the color mode from light to dark.
let toggleColorModeBtn = document.getElementById("toggleColorMode_btn");

toggleColorModeBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-mode");
});