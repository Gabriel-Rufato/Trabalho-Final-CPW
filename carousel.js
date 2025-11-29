document.addEventListener('DOMContentLoaded', function () {
  
  const images = [
    'imagens/bg1.jpg',
    'imagens/bg2.jpg',
    'imagens/bg3.jpg'
  ];
  const interval = 5000; 

  const carousel = document.querySelector('.bg-carousel');
  if (!carousel || images.length === 0) return;

  const slides = carousel.querySelectorAll('.slide');
  let currentImage = 0;

  slides[0].style.backgroundImage = `url(${images[0]})`;
  slides[0].classList.add('visible');

  setInterval(() => {
    const nextImage = (currentImage + 1) % images.length;
    const currentSlide = slides[currentImage % 2];
    const nextSlide = slides[(currentImage + 1) % 2];

    nextSlide.style.backgroundImage = `url(${images[nextImage]})`;
    nextSlide.classList.add('visible');
    currentSlide.classList.remove('visible');

    currentImage = nextImage;
  }, interval);
});
