let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

// This scroll event changes the navbar style depending on whether it's at the top of the document or not
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        navLinks.forEach(navLink => {
            navLink.classList.add("scrolled");
            navLink.classList.remove("un-scrolled");
        });
    } else {
        navbar.classList.remove("scrolled");
        navLinks.forEach(navLink => {
            navLink.classList.remove("scrolled");
            navLink.classList.add("un-scrolled");
        });
    }
});

// This binds a click event to each nav link and handles its active state
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
       let currentActiveLink = document.querySelector(".active");
       
       if (currentActiveLink) {
           currentActiveLink.classList.remove("active");
       }
       
       if (this.hash !== "#section1") {
           this.classList.add("active");
       }
    });
});

let sectionIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let currId = entry.target.getAttribute("id");
            let activeNavLink = document.querySelector(`.navbar a[href="#${currId}"]`);
            
            navLinks.forEach((link) => {
               if (link === activeNavLink && currId !== "section1") {
                   link.classList.add("active");
               } else {
                   link.classList.remove("active");
               }
            });
        }
    });
}, {threshold: 0.5});

sections.forEach((section) => {
    sectionIntersectionObserver.observe(section);
});