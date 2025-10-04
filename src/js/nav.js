document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu_hamburguesa');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('menu_abierto');
        
        // Actualiza el ícono del menú
        const icon = menuBtn.querySelector('i');
        if (nav.classList.contains('menu_abierto')) {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x-lg');
        } else {
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        }
    });

    // Cierra el menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu_abierto');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        });
    });

    // Cierra el menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('menu_abierto')) {
            nav.classList.remove('menu_abierto');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        }
    });
});