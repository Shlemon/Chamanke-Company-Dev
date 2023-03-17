// Nav burger buttons
const navTogglers = document.querySelectorAll('.navToggle');
const navMenus = document.querySelectorAll('.navMenu');
const burgerBtn = document.querySelector('#burgerIcon');
const closeBtn = document.querySelector('#closeIcon');

if (screen.width < 768) {
  navTogglers.forEach((toggler) => {
    toggler.addEventListener('click', (e) => {
      if (e.currentTarget === navTogglers[0]) {
        updateNavMenu();
      } else if (e.currentTarget === navTogglers[1]) {
        showSubNavMenu(navMenus[1]);
      } else if (e.currentTarget === navTogglers[2]) {
        showSubNavMenu(navMenus[2]);
      }
    });
  });
}

function updateNavMenu() {
  burgerBtn.classList.add('fade-out');

  setTimeout(() => {
    burgerBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('fade-in');
    closeBtn.classList.toggle('hidden');
    navMenus[0].classList.toggle('hidden');
    updateAriaAttribute(navMenus[0]);
  }, 100);
}

function showSubNavMenu(menu) {
  menu.classList.toggle('invisible');
  menu.classList.toggle('h-[10rem]');
  updateAriaAttribute(menu);
}

function updateAriaAttribute(menu) {
  if (menu.classList.contains('hidden') || menu.classList.contains('invisible')) {
    menu.setAttribute('aria-expanded', 'false');
  } else {
    menu.setAttribute('aria-expanded', 'true');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// store the id of the clicked service from the navBar
const serviceLinks = document.querySelectorAll('.serviceLink');

serviceLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const clickedLink = link.getAttribute('data-service');
    console.log(clickedLink);
    localStorage.setItem('selectedServiceId', clickedLink);
  });
});

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
    }
    // else {
    //   elmsToReveal[i].classList.remove('active');
    // }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// back to top Btn
const toTopBtn = document.querySelector('#toTopBtn');
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTopBtn.style.opacity = 1;
    screen.width <= 450 ? (toTopBtn.style.right = '15px') : (toTopBtn.style.right = '50px');
  } else {
    toTopBtn.style.opacity = 0;
    toTopBtn.style.right = '0px';
  }
}

toTopBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
