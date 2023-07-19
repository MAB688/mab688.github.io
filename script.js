const heroText = document.querySelector('.hero-text');

function fadeInOnScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY + windowHeight;

    if (scrollPosition > heroText.offsetTop + 100) {
        heroText.style.opacity = '1';
    }
}

window.addEventListener('scroll', fadeInOnScroll);