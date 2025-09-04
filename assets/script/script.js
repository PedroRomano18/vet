let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");

    setTimeout(showSlides, 4000); // muda a cada 4s
}

window.addEventListener("load", showSlides);


// ================== ANIMAÇÃO DA SEÇÃO DE IMAGEM ==================
window.addEventListener("DOMContentLoaded", () => {
    const imageSection = document.querySelector('.image-section');
    if (imageSection) {
        setTimeout(() => imageSection.classList.add('show'), 300);
    }
});


// ================== CARROSSEL DE CARDS ==================
(function () {
    const carousel = document.querySelector(".cards-carousel");
    if (!carousel) return;

    const track = carousel.querySelector(".cards-wrapper");
    const cards = Array.from(track.querySelectorAll(".card"));
    let index = 0;
    let timer = null;

    function goto(i) {
        index = (i + cards.length) % cards.length;
        const offset = carousel.clientWidth * index; // move baseado no tamanho do carrossel
        track.style.transform = `translateX(-${offset}px)`;
    }

    function start() {
        stop(); // garante que não cria 2 intervalos
        timer = setInterval(() => goto(index + 1), 3000);
    }

    function stop() {
        if (timer) clearInterval(timer);
        timer = null;
    }

    // pausa quando tocar/segurar (mobile e desktop)
    ["touchstart", "pointerdown", "mousedown"].forEach(ev =>
        carousel.addEventListener(ev, stop, { passive: true })
    );
    ["touchend", "pointerup", "mouseup", "mouseleave"].forEach(ev =>
        carousel.addEventListener(ev, start, { passive: true })
    );

    // mantém no slide correto ao redimensionar a tela
    window.addEventListener("resize", () => goto(index));

    // inicia
    goto(0);
    start();
})();