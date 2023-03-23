'use strict'

// certificates animations
window.addEventListener('scroll', reveal);

function reveal() {
  const elmsToReveal = document.querySelectorAll('.reveal');

  for (let i = 0; i < elmsToReveal.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = elmsToReveal[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      elmsToReveal[i].classList.add('active');
    }
    // else {
    //   elmsToReveal[i].classList.remove('active');
    // }
  }
}
