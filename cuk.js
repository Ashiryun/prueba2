window.addEventListener('scroll', function() {
    const imagen_arriba = document.querySelector('.imagen_arriba');
    const imagen_abajo = document.querySelector('.imagen_abajo');
    const scrolled = window.scrollY > 0;

    if (scrolled) {
        imagen_arriba.style.opacity = '0';
        imagen_abajo.style.opacity = '1';
    } else {
        imagen_arriba.style.opacity = '1';
        imagen_abajo.style.opacity = '0';
    }
});
