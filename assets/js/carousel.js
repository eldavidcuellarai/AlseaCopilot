// Carrusel accesible: auto y manual
const track = document.getElementById('carousel-track');
const items = track.children;
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let current = 0;
let interval = null;

function showSlide(idx) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${(i - idx) * 100}%)`;
    items[i].setAttribute('aria-hidden', i !== idx);
    items[i].tabIndex = i === idx ? 0 : -1;
  }
}

function nextSlide() {
  current = (current + 1) % items.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
}

function startAuto() {
  interval = setInterval(nextSlide, 4000);
}
function stopAuto() {
  clearInterval(interval);
}

prevBtn.addEventListener('click', () => { stopAuto(); prevSlide(); startAuto(); });
nextBtn.addEventListener('click', () => { stopAuto(); nextSlide(); startAuto(); });

// Accesibilidad: teclas flecha
track.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { prevBtn.click(); }
  if (e.key === 'ArrowRight') { nextBtn.click(); }
});

// Inicializar
showSlide(current);
startAuto();
