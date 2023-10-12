// animacion para imagenes
const imagenes = document.querySelectorAll('.hero__figure');

// logica para animacion de imagenes
function triggerAnimation(entries) {
  entries.forEach(entry => {
    const image = entry.target.querySelector('img')
    image.classList.toggle('unset', entry.isIntersecting);
  })
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: .7
}

const observer = new IntersectionObserver(triggerAnimation, options);

imagenes.forEach(imagen => {
  observer.observe(imagen)
})

// animacion para menu principal
const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');
const body = document.body;
const imagenesHero = document.querySelectorAll('.hero__img');
const primeraImagen = document.querySelector('.hero__img[data-animation="up"]');

// Función para reiniciar la animación de la primera imagen
function restartFirstImageAnimation() {
  primeraImagen.classList.remove('unset');
  void primeraImagen.offsetWidth; // Truco para reiniciar la animación
  primeraImagen.classList.add('unset');
}

// Función para ocultar todas las imágenes de hero__img
function hideImages() {
  imagenesHero.forEach((imagen) => {
    imagen.classList.add('hidden');
  });
}

// Función para mostrar todas las imágenes de hero__img
function showImages() {
  imagenesHero.forEach((imagen) => {
    imagen.classList.remove('hidden');
  });
}

// Función para cerrar el menú y reiniciar la animación de la primera imagen
function closeMenu() {
  menuList.classList.remove('nav__list--show');
  body.classList.remove('no-scroll');

  // Mostrar todas las imágenes de hero__img
  showImages();

  // Reiniciar la animación de la primera imagen al cerrar el menú
  restartFirstImageAnimation();
}

menu.addEventListener('click', function () {
  menuList.classList.toggle('nav__list--show');
  body.classList.toggle('no-scroll');

  if (menuList.classList.contains('nav__list--show')) {
    // Ocultar gradualmente todas las imágenes de hero__img al abrir el menú
    hideImages();
  } else {
    // Cerrar el menú y reiniciar la animación al cerrarlo
    closeMenu();
  }
});

links.forEach(function (link) {
  link.addEventListener('click', function () {
    // Cierra el menú al hacer clic en un enlace de navegación
    closeMenu();
  });
});
