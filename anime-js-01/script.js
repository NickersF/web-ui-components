import anime from "./anime.es.js";

/*
 Starting to build up a basic pattern here where I get the elements in question
 and create the anime object. Then I set up an event listener for the element which
 controls the animation and set up some condition to set the 'animation controls'.
 
 I think this can be taken further with timelines and using different events.
 One example I want to do is that when an element is blurred a sequence of animations 
 start based on some validation behavior. You can see where this is going...
 */
const animeContainerBasic01 = document.querySelector(".anime-container.anim-basic-01");
const elementList = document.querySelectorAll(".anim-el");
const staggeredAnimation = anime({
    targets: elementList,
    translateX: 300,
    rotate: "1turn",
    delay: anime.stagger(50),
    easing: "easeInOutCubic",
    duration: 500,
    autoplay: false
});
let isStaggerAnimReversed = false;

animeContainerBasic01.addEventListener("click", function (){
    if (staggeredAnimation.completed) {
        isStaggerAnimReversed = !isStaggerAnimReversed;

        if (isStaggerAnimReversed) {
            staggeredAnimation.direction = "reverse";
        } else {
            staggeredAnimation.direction = "normal";
        }
    }
    
    staggeredAnimation.play();
});

const animeContainerScale01 = document.querySelector(".anime-container.anim-scale-01");
const widthAnimation = anime({
    targets: ".scale-01-el",
    width: [32, 300],
    easing: "easeInOutCubic",
    duration: 500,
    autoplay: false
});
let isWidthAnimReversed = false;

animeContainerScale01.addEventListener("click", function () {
    if (widthAnimation.completed) {
        isWidthAnimReversed = !isWidthAnimReversed;
        
        if (isWidthAnimReversed) {
            widthAnimation.direction = "reverse";
        } else {
            widthAnimation.direction = "normal";
        }
    }
    
    widthAnimation.play();
});