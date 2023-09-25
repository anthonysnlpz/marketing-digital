const imagenes = document.querySelectorAll('.hero__figure');

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