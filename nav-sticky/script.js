window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)';
        navbar.style.color = "rgba(255, 255, 255, 1)";
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0)';
        navbar.style.color = "rgba(51, 51, 51, 1)";
    }
});