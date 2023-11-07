window.addEventListener('scroll', function() {
    const barra_de_nav = document.querySelector('.barra_de_nav');
    const scrolled = window.scrollY > 0;

    if (scrolled) {
        barra_de_nav.classList.add('scrolled');
    } else {
        barra_de_nav.classList.remove('scrolled');
    }
});


