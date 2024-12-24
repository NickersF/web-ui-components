let playButton = document.getElementById("playButton");
let shakeText = document.getElementById("shakeTextX");

playButton.addEventListener("click", function () {
    shakeText.classList.add('fx-shake-x');

    shakeText.addEventListener("animationend", function () {
        shakeText.classList.remove("fx-shake-x");
    }, {once: true});
});

// We can do it with JS
// let shakeXJsBtn = document.getElementById("shakeXJsBtn");
// let shakeXElJs = document.getElementById("shakeXElJs");
//
// shakeXJsBtn.addEventListener("click", function () {
//     let randShakeVal = Math.floor(Math.random() * 100);
//     console.log(randShakeVal);
//     shakeXElJs.style.transform = `translateX(${randShakeVal}px)`;
// });

// Using a dampening function
function bounceX(element, initAmplitude, steps, decayTime, decayRate, decayConst) {
    let currentStep = 0;
    let maxSteps = steps;
    
    function animateBounce() {
        // Termination condition for the animation loop
        if (currentStep > maxSteps) {
            return;
        }
        
        let decayFactor = Math.pow(decayRate, currentStep);
        let expDecay = Math.exp(-(currentStep * decayTime)/decayConst);
        let amplitude = initAmplitude * decayFactor * expDecay;
        
        // Apply the dampened result
        element.style.transform = `translateX(${amplitude * Math.sin(currentStep)}px)`;

        // Increase the step
        currentStep += 0.33 // Use a finer interval for the animation
        
        requestAnimationFrame(animateBounce)
    }
    
    // Start the animation
    animateBounce();
}

let animElement = document.getElementById("shakeXElJs2");
let shakeButton = document.getElementById("shakeXJsBtn2");

shakeButton.addEventListener("click", function () {
    bounceX(animElement, 32, 32, 128, 1, 1000);
})