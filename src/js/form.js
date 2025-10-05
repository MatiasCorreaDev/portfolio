document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formularioContacto');
    const mensajeExito = document.getElementById('mensajeExito');
    const textarea = document.getElementById('mensaje');

    // Función para ajustar la altura del textarea
    function autoResize() {
        this.style.height = '150px'; // Reset de altura
        this.style.height = this.scrollHeight + 'px';
    }

    // Eventos para el auto-resize
    textarea.addEventListener('input', autoResize);

    form.addEventListener('submit', function(e) {
        // El formulario se enviará normalmente a formsubmit.co
        // Después del envío exitoso, formsubmit.co redirigirá de vuelta a la página

        // Verificamos si la URL tiene un parámetro de éxito (puedes personalizar esto según la configuración de formsubmit.co)
        if (window.location.search.includes('success') || window.location.search.includes('enviado')) {
            mostrarMensajeExito();
        }
    });

    function mostrarMensajeExito() {
        mensajeExito.classList.add('visible');
        
        // Resetear el formulario
        form.reset();

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            mensajeExito.classList.remove('visible');
        }, 5000);
    }
});