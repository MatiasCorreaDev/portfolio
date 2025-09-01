//! Cambiar el fondo al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY >= 100) {
        header.classList.add('scrolling');
    }
    else {
        header.classList.remove('scrolling');
    }
});

//! Función para girar las tarjetas al hacer clic
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('girada');
    });
});


//! Función para aparecer Formulario
function aparecerForm() {
    let formulario = document.getElementById("formularioContacto");
    if (formulario.style.display === "flex") {
        formulario.style.display = "none";
    } else {
        formulario.style.display = "flex";
    }
}
// ! Para modificar la clase del nav cuando cambiamos el tamaño de la pantalla
// function actualizarMenu() {
//     const nav = document.querySelector('.menu-horizontal') || document.querySelector('.menu-hamburguesa');

//     if (window.innerWidth <= 860) {
//         if (nav && nav.classList.contains('menu-horizontal')) {
//             nav.classList.remove('menu-horizontal');
//             nav.classList.add('menu-hamburguesa');
//         }
//     } else {
//         if (nav && nav.classList.contains('menu-hamburguesa')) {
//             nav.classList.remove('menu-hamburguesa');
//             nav.classList.remove('active'); // por si quedó abierto
//             nav.classList.add('menu-horizontal');
//         }
//     }
// }

// Ejecutar al cargar
// window.addEventListener('load', actualizarMenu);

// Ejecutar al redimensionar
// window.addEventListener('resize', actualizarMenu);

// ! Función para menú
//*Función para abrir/cerrar el menú hamburguesa
const toggleMenu = document.getElementById('toggleMenu');
const menu = document.querySelector('.menu-hamburguesa');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle("activa");
    toggleMenu.textContent = menu.classList.contains('activa') ? '✖' : '☰';
});

document.addEventListener('click', (e) => {
    if (!menu) return;

    const clicFuera = !menu.contains(e.target) && e.target !== toggleMenu;
    const clicEnEnlace = e.target.tagName === 'A' && menu.contains(e.target);

    if (clicFuera || clicEnEnlace) {
        menu.classList.remove('activa');
        toggleMenu.textContent = '☰';
    }
});

