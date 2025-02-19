import anime from "../_jslib/anime.es.js";

export function main() {
    svgTris();
    svgMorph()
}

export function svgTris() {
    anime({
        targets: ".svg-tri-container .tri-lines",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        direction: "alternate",
        loop: true,
        autoplay: true
    });
}

export function svgMorph() {
    anime({
        targets: ".svg-morph-container .polymorph",
        points: [
            { value: "33 58.5,9 38.5,29 78.5,49 38.5,99 57.5,119 89.5,49 58.5,9 45" },
            { value: "33 64,24 104,64 65,104 44,84 24,64 64,58 24"}
        ],
        easing: "easeInOutSine",
        duration: 1500,
        loop: true,
        autoplay: true
    });
}

main();