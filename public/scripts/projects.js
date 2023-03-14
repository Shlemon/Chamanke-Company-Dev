// display the category based on the click from the services page
window.onload = () => {
  filterCards(selectedServiceId);
};
// getting the id of the clicked button from the services page that was stored in sessionStorage
const selectedServiceId = localStorage.getItem('selectedServiceId');
const categoryButtons = document.querySelectorAll('.service-category');

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
