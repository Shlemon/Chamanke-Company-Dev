'use strict';
// display the category based on the click from the services page
window.onload = () => {
  filterCards(selectedServiceId);
};
// getting the id of the clicked button from the services section of home page that was stored in localStorage
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
      btn.classList.add('text-chamanke-red');
    } else {
      btn.classList.remove('text-chamanke-red');
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
    img: './img/home-page/services/all-works.jpeg',
  },
  civil: {
    title: 'Civil Works',
    img: './img/home-page/services/snow-removing.jpg',
  },
  catering: {
    title: 'Catering & Housekeeping',
    img: './img/home-page/services/catering-.jpg',
  },
  logistics: {
    title: 'Logistics',
    img: './img/home-page/services/logistics.jpg',
  },
  procurement: {
    title: 'Procurment & Supply Chain',
    img: './img/home-page/services/oil-trading.jpg',
  },
  maintenance: {
    title: 'Mechanical & Maintenance Works',
    img: './img/home-page/services/maintenance.jpeg',
  },
};
