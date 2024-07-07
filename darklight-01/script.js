let toggleColorModeBtn = document.querySelector(".toggleColorMode_btn");
let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

toggleColorModeBtn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
});