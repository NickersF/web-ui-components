let options = {
    root: null,
    rootMargin: "0px",
    //threshold: 0,
    threshold: 0.5
}

let section1Target = document.querySelector(".int-target-s2");
let section2Target = document.querySelector(".int-target-s3");

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("int-target-s3")) {
                entry.target.classList.add("int-target-s3-anim");
            } else {
                entry.target.classList.add("int-target-s2-anim");
            }
        } else {
            if (entry.target.classList.contains("int-target-s3")) {
                entry.target.classList.remove("int-target-s3-anim");
            } else {
                entry.target.classList.remove("int-target-s2-anim");
            }
        }
    });
}

let observer = new IntersectionObserver(callback, options);

observer.observe(section1Target);
observer.observe(section2Target);
