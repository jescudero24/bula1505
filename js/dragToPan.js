  // Variables para manejar el arrastre
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

const container = document.getElementById('container');
const imgWrapper = document.getElementById('img-wrapper');

// Configuramos eventos para arrastrar
imgWrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  container.style.cursor = 'grabbing'; // Cambia cursor
  startX = e.clientX;
  startY = e.clientY;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
});

imgWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'default';
});

imgWrapper.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'default';
});

imgWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;
  const walkX = (startX - x);
  const walkY = (startY - y);
  container.scrollLeft = scrollLeft + walkX;
  container.scrollTop = scrollTop + walkY;
});