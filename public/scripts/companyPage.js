// Nav burger buttons
const navTogglers = document.querySelectorAll('.navToggle');
const navMenus = document.querySelectorAll('.navMenu');
const toggleBars = document.querySelector('#toggleBars');

if (screen.width < 768) {
  navTogglers.forEach((toggler) => {
    toggler.addEventListener('click', (e) => {
      if (e.currentTarget === navTogglers[0]) {
        toggleBars.classList.toggle('rotate-90');
        navMenus[0].classList.toggle('hidden');
      } else if (e.currentTarget === navTogglers[1]) {
        navMenus[1].classList.toggle('invisible');
        navMenus[1].classList.toggle('h-[10rem]');
      } else if (e.currentTarget === navTogglers[2]) {
        navMenus[2].classList.toggle('invisible');
        navMenus[2].classList.toggle('h-[10rem]');
      }
    });
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// show certificates animations

window.addEventListener('scroll', reveal);

function reveal() {
  const elmsToReveal = document.querySelectorAll('.reveal');

  for (let i = 0; i < elmsToReveal.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = elmsToReveal[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      elmsToReveal[i].classList.add('active');
    } else {
      elmsToReveal[i].classList.remove('active');
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// back to top Btn
const toTopBtn = document.querySelector('#toTopBtn');
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // toTopBtn.classList.add('opacity-100')
    toTopBtn.style.opacity = 1;
    screen.width <= 450 ? (toTopBtn.style.right = '15px') : (toTopBtn.style.right = '50px');
  } else {
    // toTopBtn.classList.remove('opacity-100');
    toTopBtn.style.opacity = 0;
    toTopBtn.style.right = '0px';
  }
}

toTopBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
