let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        });

    slideIndex++;
        if (slideIndex > slides.length) {
                slideIndex = 1;
        }

    slides[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 4000);
}

window.onload = showSlides;

window.addEventListener("DOMContentLoaded", () => {
    const imageSection = document.querySelector('.image-section');
    setTimeout(() => {
        imageSection.classList.add('show');
    }, 300); // pequeno delay para dar tempo da página carregar
});
