// =========================
// CONFIGURACIÓN DE ESTRELLAS
// =========================

const cantidad_estrellas = 100; // Número total de estrellas
const fondo = document.querySelector('.background'); // Contenedor del fondo
const estrellas = []; // Array para almacenar las estrellas
const velocidades = []; // Array para almacenar velocidades de cada estrella
let mouse_x = 0.5; // Posición X del mouse normalizada
let mouse_y = 0.5; // Posición Y del mouse normalizada

// =========================
// CREACIÓN DE ESTRELLAS
// =========================
for (let i = 0; i < cantidad_estrellas; i++) {
    const estrella = document.createElement('div');
    estrella.classList.add('star');
    // Posición inicial aleatoria
    const pos_x = Math.random() * window.innerWidth;
    const pos_y = Math.random() * window.innerHeight;
    estrella.style.left = `${pos_x}px`;
    estrella.style.top = `${pos_y}px`;
    // Tamaño aleatorio
    const tamano = Math.random() * 2 + 1;
    estrella.style.width = `${tamano}px`;
    estrella.style.height = `${tamano}px`;
    // Parpadeo aleatorio
    estrella.style.animation = `parpadeo ${Math.random() * 2 + 2}s infinite alternate`;
    estrella.style.pointerEvents = 'none';

    fondo.appendChild(estrella);

    estrellas.push({ elemento: estrella, x: pos_x, y: pos_y, tamano: tamano });
    
    // Velocidad lenta y aleatoria
    velocidades.push({
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
    });
}

// =========================
// ANIMACIÓN DE ESTRELLAS
// =========================
function animar_estrellas() {
    for (let i = 0; i < estrellas.length; i++) {
        // Movimiento base y reacción al mouse
        estrellas[i].x += velocidades[i].vx + (mouse_x - 0.5) * estrellas[i].tamano * 0.2;
        estrellas[i].y += velocidades[i].vy + (mouse_y - 0.5) * estrellas[i].tamano * 0.2;

        // Reaparecer si salen de pantalla
        if (estrellas[i].x < 0) estrellas[i].x = window.innerWidth;
        if (estrellas[i].x > window.innerWidth) estrellas[i].x = 0;
        if (estrellas[i].y < 0) estrellas[i].y = window.innerHeight;
        if (estrellas[i].y > window.innerHeight) estrellas[i].y = 0;

        estrellas[i].elemento.style.left = `${estrellas[i].x}px`;
        estrellas[i].elemento.style.top = `${estrellas[i].y}px`;
    }
    requestAnimationFrame(animar_estrellas);
}
animar_estrellas();

// =========================
// EVENTOS DE INTERACCIÓN
// =========================

// Actualiza la posición del mouse
window.addEventListener('mousemove', function(evento) {
    mouse_x = evento.clientX / window.innerWidth;
    mouse_y = evento.clientY / window.innerHeight;
});

// Ajusta las estrellas al cambiar el tamaño de la ventana
window.addEventListener('resize', function() {
    for (let i = 0; i < estrellas.length; i++) {
        if (estrellas[i].x > window.innerWidth) estrellas[i].x = Math.random() * window.innerWidth;
        if (estrellas[i].y > window.innerHeight) estrellas[i].y = Math.random() * window.innerHeight;
    }
});

