document.addEventListener('DOMContentLoaded', () => {
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const surpriseButton = document.getElementById('surpriseButton');
    const title = document.querySelector('.title');

    // =========================================================================
    //  FECHA Y HORA DE FINALIZACIÓN FIJA (10 de Julio de 2025, 16:06:16 PM -04 La Paz, Bolivia)
    //  Esto es 45 horas, 29 minutos, 17 segundos a partir de
    //  Martes, 8 de julio de 2025, 6:36:59 PM -04
    // =========================================================================
    // Formato: new Date(año, mes - 1, día, horas, minutos, segundos)
    // mes - 1 porque enero es 0, febrero es 1, ..., julio es 6.
    // Las horas son en formato 24h.
    const futureDate = new Date(2025, 6, 10, 16, 6, 16);

    // --- El resto del código de la función updateCountdown() sigue igual ---

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeLeft = futureDate - currentTime;

        // Calcula días, horas, minutos y segundos
        // Asegurarse de que los valores no sean negativos
        const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        const hours = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

        // Muestra los valores, añadiendo un 0 al principio si son menores de 10
        daysSpan.textContent = days < 10 ? '0' + days : days;
        hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
        minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;

        // Cuando la cuenta regresiva llega a 0
        if (timeLeft < 0) {
            clearInterval(countdownInterval); // Detiene el intervalo
            daysSpan.textContent = '00';
            hoursSpan.textContent = '00';
            minutesSpan.textContent = '00';
            secondsSpan.textContent = '00';
            title.textContent = '¡La sorpresa está lista!';
            surpriseButton.removeAttribute('disabled'); // Habilita el botón
            surpriseButton.classList.add('active'); // Agrega clase para estilos de activación
        }
    }

    // Llama a la función una vez al inicio para evitar un parpadeo
    updateCountdown();

    // Actualiza la cuenta regresiva cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Puedes añadir un evento al botón aquí si quieres que haga algo después
    // surpriseButton.addEventListener('click', () => {
    //     if (!surpriseButton.disabled) {
    //         alert('¡Sorpresa abierta!');
    //         // Aquí iría el código para mostrar la sorpresa real
    //     }
    // });
});