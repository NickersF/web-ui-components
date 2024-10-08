let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");
let navLinksResponsive = document.querySelectorAll(".navbar-responsive a");

// This scroll event changes the navbar style depending on whether it's at the top of the document or not
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let navbarResponsive = document.querySelector(".navbar-responsive");
    let logoEl = document.querySelector(".logo-un-scrolled");
    let navIconEls = document.querySelectorAll(".icon-rg");
    
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        navbarResponsive.classList.add("scrolled");
        logoEl.classList.add("logo-scrolled");
        
        navLinks.forEach(navLink => {
            navLink.classList.add("scrolled");
            navLink.classList.remove("un-scrolled");
        });
        
        navLinksResponsive.forEach(navLinkRes => {
            navLinkRes.classList.add("scrolled");
            navLinkRes.classList.remove("un-scrolled");
        });
        
        navIconEls.forEach(navIcon => {
           navIcon.classList.add("scrolled");
        });
    } else {
        navbar.classList.remove("scrolled");
        navbarResponsive.classList.remove("scrolled");
        logoEl.classList.remove("logo-scrolled");
        
        navLinks.forEach(navLink => {
            navLink.classList.remove("scrolled");
            navLink.classList.add("un-scrolled");
        });
        
        navLinksResponsive.forEach(navLinkRes => {
           navLinkRes.classList.remove("scrolled");
           navLinkRes.classList.add("un-scrolled");
        });

        navIconEls.forEach(navIcon => {
            navIcon.classList.remove("scrolled");
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

// Same as above but for the responsive navigation
navLinksResponsive.forEach((navLinkRes) => {
    navLinkRes.addEventListener("click", function () {
        let currentActiveLink = document.querySelector(".navbar-responsive a.active");

        if (currentActiveLink) {
            currentActiveLink.classList.remove("active");
        }

        if (this.hash !== "#section1") {
            this.classList.add("active");
        }
    });
});

// This handles changing the section styles as you scroll. Using a 0.5 threshold for the intersection seems to feel ok.
let sectionIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let currId = entry.target.getAttribute("id");
            let activeNavLink = document.querySelector(`.navbar a[href="#${currId}"]`);
            let activeNavLinkRes = document.querySelector(`.navbar-responsive a[href="#${currId}"]`);

            navLinks.forEach((link) => {
                if (link === activeNavLink && currId !== "section1") {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
            
            navLinksResponsive.forEach((linkRes) => {
                if (linkRes === activeNavLinkRes && currId !== "section1") {
                    linkRes.classList.add("active");
                } else {
                    linkRes.classList.remove("active");
                }
            });
        }
    });
}, {threshold: 0.5});

sections.forEach((section) => {
    sectionIntersectionObserver.observe(section);
});


let mobileNavBtnEl = document.querySelector(".mobileNav_btn");

// Open/close the responsive nav.
mobileNavBtnEl.addEventListener("click", function () {
    let responsivePanelEl = document.querySelector(".navbar-responsive");
    
    if (!responsivePanelEl.classList.contains("navbar-responsive-open")) {
       responsivePanelEl.classList.add("navbar-responsive-open"); 
    } else {
        responsivePanelEl.classList.remove("navbar-responsive-open");
    }
});

// Closes the responsive nav when the viewport is greater than the responsive breakpoint.
window.addEventListener("resize", function (e) {
    let responsivePanelEl = document.querySelector(".navbar-responsive");
    
    if (window.innerWidth > 680) {
        responsivePanelEl.classList.remove("navbar-responsive-open");
    }
});