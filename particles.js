/* ========================================= */
/* LUKA MAGIC PARTICLES CORE V1.0 */
/* Este script usa la librería Particles.js */
/* ========================================= */

// Usamos el ID de nuestro contenedor HTML
particlesJS("canvas-container", {
    "particles": {
        // --- 1. Cantidad de Partículas ---
        "number": {
            "value": 150, // Muchos puntos para crear la sensación de red
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        // --- 2. Color y Transparencia ---
        "color": {
            "value": "#00CFFF" // El azul neón de Luka
        },
        "shape": {
            "type": "circle" // Puntos circulares
        },
        "opacity": {
            "value": 0.5, // Semitransparentes para fluidez
            "random": true, // Unos más brillantes que otros
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        // --- 3. Tamaño ---
        "size": {
            "value": 3, // Puntos pequeños
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        // --- 4. El efecto de Red o 'Telaraña' de Baloncesto ---
        "line_linked": {
            "enable": true,
            "distance": 150, // Distancia para que se unan
            "color": "#00CFFF", // Las líneas también son neón
            "opacity": 0.3, // Líneas muy sutiles
            "width": 1 // Líneas finas
        },
        // --- 5. Movimiento de Fondo ---
        "move": {
            "enable": true,
            "speed": 2, // Movimiento suave e infinito
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out", // Cuando salen, reaparecen
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    // --- 6. Interactividad con el Mouse ---
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            // Cuando el mouse pasa encima (Hover)
            "onhover": {
                "enable": true,
                "mode": "grab" // Las partículas se 'agarran' al mouse
            },
            // Cuando el usuario hace clic
            "onclick": {
                "enable": true,
                "mode": "push" // Se crean más partículas
            },
            "resize": true // Adaptar si cambias el tamaño de la ventana
        },
        "modes": {
            // Configuración del modo Grab
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.6 // Las líneas se vuelven más brillantes
                }
            },
            "push": {
                "particles_nb": 4 // Número de partículas creadas al hacer clic
            }
        }
    },
    "retina_detect": true // Soporte para pantallas de alta resolución
});