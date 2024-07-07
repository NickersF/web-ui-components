let toggleColorModeBtn = document.querySelector(".toggleColorMode_btn");
let toggleColorIcon = toggleColorModeBtn.getElementsByTagName("i")[0];
let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

toggleColorModeBtn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        toggleColorIcon.classList.toggle("bi-brightness-low");
        toggleColorIcon.classList.toggle("bi-brightness-low-fill");
    } else {
        document.body.classList.toggle("dark-theme");
    }
});