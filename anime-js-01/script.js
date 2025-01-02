import anime from "../_jslib/anime.es.js";

/*
 Starting to build up a basic pattern here where I get the elements in question
 and create the anime object. Then I set up an event listener for the element which
 controls the animation and set up some condition to set the 'animation controls'.
 
 I think this can be taken further with timelines and using different events.
 One example I want to do is that when an element is blurred a sequence of animations 
 start based on some validation behavior. You can see where this is going...
 */

// List of DOM elements
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

animeContainerBasic01.addEventListener("click", function () {
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

// Scale demo
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

// SVG demo
const animeContainerSvgLine01 = document.querySelector(".anime-container.svg-line-01");
const svgAnim01 = anime({
    targets: '.svg-line-01 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
        return i * 250
    },
    direction: 'alternate',
    loop: true
});

animeContainerSvgLine01.addEventListener("click", function () {
    svgAnim01.play();
});

// Timeline demo
const animeContainerTimeLine01 = document.querySelector(".anime-container.timeline-anim-01");
const timeline1 = anime.timeline({
    easing: "easeOutExpo",
    duration: 500,
    autoplay: false,
});

timeline1.add({
    targets: ".tl-01",
    translateX: 250,
})
    .add({
        targets: ".tl-02",
        translateX: 220,
    })
    .add({
        targets: ".tl-03",
        translateX: 190,
    })
    .add({
        targets: ".tl-01",
        translateY: 60,
        rotate: "1turn",
        scale: 0,
        opacity: 0
    })
    .add({
        targets: ".tl-02",
        translateY: 80,
        rotate: "1turn",
        scale: 0,
        opacity: 0
    })
    .add({
        targets: ".tl-03",
        translateY: 100,
        rotate: "1turn",
        scale: 0,
        opacity: 0,
    });

animeContainerTimeLine01.addEventListener("click", function () {
    timeline1.play();

    timeline1.finished.then(() => {
            timeline1.reset()
        }
    );
});

// Keyframe demo
const animeContainerKeyframe01 = document.querySelector(".anime-container.keyframe-el-1");
const keyframeAnim01 = anime({
    targets: ".keyframe-el-1",
    keyframes: [
        {translateX: 128},
        {translateY: 20},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 2500,
    loop: true
});

animeContainerKeyframe01.addEventListener("click", function () {
    keyframeAnim01.play();
});