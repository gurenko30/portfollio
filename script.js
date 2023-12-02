function openOverlay(imageSrc) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');

    overlayImage.src = imageSrc;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function openFigma(figmaLink) {
    window.open(figmaLink, '_blank');
}
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function () {
            // Удалите класс 'active' у всех слайдов
            slides.forEach(s => s.classList.remove('active'));
            
            // Добавьте класс 'active' только для выбранного слайда
            this.classList.add('active');
        });
    });
});