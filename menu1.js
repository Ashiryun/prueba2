document.addEventListener('DOMContentLoaded', function() {
    const enlaceInstitucional = document.querySelector('.efecto3');
    const menuopciones = document.querySelector('.menu-opciones');
    const rectanguloGris = document.querySelector('.rectangulo-gris');

    let institucionalHovered = false;

    enlaceInstitucional.addEventListener('mouseenter', function() {
        institucionalHovered = true;
        menuopciones.classList.add('mostrar');
        rectanguloGris.style.display = 'block';
        enlaceInstitucional.classList.add('activo'); // Añade la clase 'activo'
    });

    enlaceInstitucional.addEventListener('mouseleave', function() {
        institucionalHovered = false;
        setTimeout(function() {
            if (!menuopciones.matches(':hover')) {
                menuopciones.classList.remove('mostrar');
                rectanguloGris.style.display = 'none';
                enlaceInstitucional.classList.remove('activo'); // Remueve la clase 'activo'
            }
        }, 150); // Ajustado el tiempo de espera a 150 milisegundos
    });

    menuopciones.addEventListener('mouseenter', function() {
        if (institucionalHovered) {
            menuopciones.classList.add('mostrar');
            rectanguloGris.style.display = 'block';
            enlaceInstitucional.classList.add('activo'); // Añade la clase 'activo'
        }
    });

    menuopciones.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!enlaceInstitucional.matches(':hover')) {
                menuopciones.classList.remove('mostrar');
                rectanguloGris.style.display = 'none';
                enlaceInstitucional.classList.remove('activo'); // Remueve la clase 'activo'
            }
        }, 150); // Ajustado el tiempo de espera a 150 milisegundos
    });
});