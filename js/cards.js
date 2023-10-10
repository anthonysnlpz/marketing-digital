// Agrega un evento click a los botones de Consultar plan
const btnsPlan = document.querySelectorAll('.btn-plan');
btnsPlan.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const plan = e.target.getAttribute('data-plan');
    const card = document.getElementById(`${plan}-card`);
    const overlay = document.getElementById(`overlay-${plan}`);

    // Mostrar la tarjeta y el fondo oscuro
    card.style.display = 'block';
    overlay.style.display = 'block';

    // Deshabilitar el desplazamiento en la página
    disableScroll();
  });
});

// Agrega un evento click al botón de cierre (X)
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const plan = e.target.closest('.plan-card').id.replace('-card', ''); // Obtén el plan actual
    closeCard(plan); // Cierra el plan específico
  });
});

// Función para cerrar la tarjeta de un plan específico
function closeCard(plan) {
  const card = document.getElementById(`${plan}-card`);
  const overlay = document.getElementById(`overlay-${plan}`);

  // Ocultar la tarjeta y el fondo oscuro específicos del plan
  card.style.display = 'none';

  // Restaurar el desplazamiento en la página
  enableScroll();

  // Ocultar el fondo oscuro específico del plan
  overlay.style.display = 'none';
}

// Función para deshabilitar el desplazamiento en la página
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

// Función para habilitar el desplazamiento en la página
function enableScroll() {
  document.body.style.overflow = 'auto';
}
