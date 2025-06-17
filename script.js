document.addEventListener("DOMContentLoaded", function() {
    
    // Selecciona todos los elementos que tendrán el efecto de aparición
    const fadeElems = document.querySelectorAll('.fade-in');

    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null, // El viewport del navegador
        rootMargin: '0px',
        threshold: 0.1 // El elemento se considerará visible cuando el 10% esté en pantalla
    };

    // Crear el observador
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (visible en el viewport)
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación CSS
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez que ha sido mostrado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar el observador a cada elemento
    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

});