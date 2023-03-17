// display the category based on the click from the services page
window.onload = () => {
  filterCards(selectedServiceId);
};
// getting the id of the clicked button from the services section of home page that was stored in sessionStorage
const selectedServiceId = localStorage.getItem('selectedServiceId');
const categoryButtons = document.querySelectorAll('.service-category');

// store the id of the clicked service from the navBar
const serviceLinks = document.querySelectorAll('.serviceLink');

serviceLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const clickedLink = link.getAttribute('data-service');
    console.log(clickedLink);
    localStorage.setItem('selectedServiceId', clickedLink);
  });
});


categoryButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterCards(btn.id);
  });
});

function filterCards(value) {
  categoryButtons.forEach((btn) => {
    if (value.toLowerCase() === btn.id) {
      btn.classList.add('text-[var(--chamanke-red)]');
    } else {
      btn.classList.remove('text-[var(--chamanke-red)]');
    }
  });

  let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    if (value === 'all') {
      card.classList.remove('hidden');
    } else {
      if (card.classList.contains(value)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  updatecards(value);
}

function updatecards(value) {
  const serviceImg = document.querySelector('#servicesImg');
  const serviceTitle = document.querySelector('#servicesTitle');

  serviceTitle.textContent = services[value].title;
  serviceImg.src = services[value].img;
}

const services = {
  all: {
    title: 'All Projects',
    img: './img/services/civil-works.jpeg',
  },
  civil: {
    title: 'Civil Works',
    img: './img/Snow-removing.jpg',
  },
  catering: {
    title: 'Catering & Housekeeping',
    img: './img/services/Catering.jpg',
  },
  logistics: {
    title: 'Logistics',
    img: './img/services/logistics.jpg',
  },
  procurement: {
    title: 'Procurment & Supply Chain',
    img: './img/services/Oil Trading.jpg',
  },
  maintenance: {
    title: 'Mechanical & Maintenance Works',
    img: './img/services/Utility.jpeg',
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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