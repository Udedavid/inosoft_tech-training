const navbar = document.getElementById("navbar");

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 1) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});