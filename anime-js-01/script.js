const animeContainer = document.querySelector(".anime-container");
const elementList = document.querySelectorAll(".anim-el");

animeContainer.addEventListener("click", function (){
    anime({
        targets: elementList,
        translateX: 300,
        rotate: "1turn",
        delay: anime.stagger(100)
    }).play();
});
