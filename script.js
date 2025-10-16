// Animaciones al hacer scroll
const elements = document.querySelectorAll('.card, .gallery img, .hero-content');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     
