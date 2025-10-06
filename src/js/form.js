// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('formularioContacto');
//     const mensajeExito = document.getElementById('mensajeExito');
//     const textarea = document.getElementById('mensaje');

//     // Función para ajustar la altura del textarea
//     function autoResize() {
//         this.style.height = '150px'; // Reset de altura
//         this.style.height = this.scrollHeight + 'px';
//     }

//     // Eventos para el auto-resize
//     textarea.addEventListener('input', autoResize);

//     form.addEventListener('submit', function(e) {
//         // El formulario se enviará normalmente a formsubmit.co
//         // Después del envío exitoso, formsubmit.co redirigirá de vuelta a la página

//         // Verificamos si la URL tiene un parámetro de éxito (puedes personalizar esto según la configuración de formsubmit.co)
//         if (window.location.search.includes('success') || window.location.search.includes('enviado')) {
//             mostrarMensajeExito();
//         }
//     });

//     function mostrarMensajeExito() {
//         mensajeExito.classList.add('visible');
        
//         // Resetear el formulario
//         form.reset();

//         // Ocultar el mensaje después de 5 segundos
//         setTimeout(() => {
//             mensajeExito.classList.remove('visible');
//         }, 5000);
//     }
// });


// document.getElementById('formularioContacto').addEventListener('submit', function (e) {
//     e.preventDefault(); // Evita el envío tradicional y la redirección

//     const form = e.target;
//     const formData = new FormData(form);

//     fetch(form.action, {
//         method: form.method,
//         body: formData,
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => {
//         if (response.ok) {
//             // Mostrar mensaje de éxito
//             document.getElementById('mensajeExito').style.display = 'block';
//             form.reset(); // Limpia el formulario
//         } else {
//             alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
//         }
//     })
//     .catch(error => {
//         alert('Error en la conexión. Intenta más tarde.');
//         console.error(error);
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formularioContacto');
    const mensajeExito = document.getElementById('mensajeExito');
    const textarea = document.getElementById('mensaje');

    // Función para ajustar la altura del textarea automáticamente
    function autoResize() {
        this.style.height = '150px'; // Reset altura base
        this.style.height = this.scrollHeight + 'px';
    }
    textarea.addEventListener('input', autoResize);

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío normal y la recarga/redirección

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                mostrarMensajeExito();
            } else {
                alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
            }
        })
        .catch(error => {
            alert('Error en la conexión. Intenta más tarde.');
            console.error(error);
        });
    });

    function mostrarMensajeExito() {
        mensajeExito.classList.add('visible');

        form.reset();

        // Opcional: resetear también la altura del textarea
        textarea.style.height = '150px';

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            mensajeExito.classList.remove('visible');
        }, 5000);
    }

    // Si quieres mantener la función que mostraba mensaje basado en URL (por si viene de redirección anterior)
    if (window.location.search.includes('success') || window.location.search.includes('enviado')) {
        mostrarMensajeExito();
    }
});
