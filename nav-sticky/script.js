window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0)';
    }
});