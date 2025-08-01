// Constantes y elementos del DOM
const loadingScreen = document.getElementById('loading-screen');
const loadingProgress = document.getElementById('loading-progress');
const mainContent = document.getElementById('main-content');
const heartsContainer = document.querySelector('.hearts');
const accessForm = document.getElementById('access-form');

// Configuración de la carga
const totalLoadTime = 30000; // 30 segundos
const startTime = Date.now();
let progress = 0;

// Respuestas correctas para el formulario
const correctAnswers = {
    name: 'cami',
    met: 'el parque', // Puedes cambiar esto por la respuesta real
    dateNumber: '25', // Puedes cambiar esto por la respuesta real
    favColor: 'azul'
};

// Función para actualizar la barra de progreso
function updateLoadingProgress() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const targetProgress = Math.min(100, (elapsedTime / totalLoadTime) * 100);

    // Simula un avance aleatorio y no lineal
    const increment = Math.random() * 5;
    progress = Math.min(targetProgress, progress + increment);
    loadingProgress.textContent = Math.floor(progress) + '%';

    if (progress < 100) {
        setTimeout(updateLoadingProgress, Math.random() * 500);
    } else {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            generateHearts();
        }, 500);
    }
}

// Función para generar la animación de corazones
function generateHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.setProperty('--random-x', `${Math.random() * 200 - 100}vw`);
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.fontSize = `${Math.random() * 2 + 1}em`;
        heartsContainer.appendChild(heart);
    }
}

// Evento de envío del formulario
accessForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name').value.trim().toLowerCase();
    const metInput = document.getElementById('met').value.trim().toLowerCase();
    const dateNumberInput = document.getElementById('date-number').value.trim();
    const favColorInput = document.getElementById('fav-color').value.trim().toLowerCase();

    // Validación de las respuestas
    if (nameInput === correctAnswers.name && metInput === correctAnswers.met && dateNumberInput === correctAnswers.dateNumber && favColorInput === correctAnswers.favColor) {
        alert('¡Bienvenida, Cami! Acceso concedido.');
        // Aquí iría el código para mostrar la página de la dedicatoria
    } else {
        alert('Las respuestas no son correctas. Inténtalo de nuevo.');
    }
});

// Iniciar la animación de carga al cargar la página
updateLoadingProgress();

