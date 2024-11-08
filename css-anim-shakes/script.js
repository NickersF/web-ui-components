let playButton = document.getElementById("playButton");
let shakeText = document.getElementById("shakeTextX");

playButton.addEventListener("click", function () {
    shakeText.classList.add('fx-shake-x');
    
    shakeText.addEventListener("animationend", function () {
        shakeText.classList.remove("fx-shake-x");
    }, { once: true });
});