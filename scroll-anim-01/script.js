let options = {
    root: null,
    rootMargin: "0px",
    //threshold: 0,
    threshold: 0.5
}

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("int-target-anim");
        } else {
            entry.target.classList.remove("int-target-anim");
        }
    });
}

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector(".int-target-s2");

observer.observe(target);