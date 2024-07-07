let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
}

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry);
    });
}

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector(".int-target-s2");

observer.observe(target);