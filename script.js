document.getElementById("surpriseButton").addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    const loader = document.querySelector(".loader-container");
    const bar = document.querySelector(".progress-bar-fill");
    loader.classList.remove("hidden");

    let progress = 15;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            loader.innerHTML = "<h2>¡Sorpresa abierta con éxito! 💖</h2>";
        }
        bar.style.width = progress + "%";
    }, 800);
});

