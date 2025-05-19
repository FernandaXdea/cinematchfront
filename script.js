// Simples JS para rolar carrossel no mouse
const carrossel = document.querySelector('.carrossel');

carrossel.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  carrossel.scrollLeft += evt.deltaY;
});
