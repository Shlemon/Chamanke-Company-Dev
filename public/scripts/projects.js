// display the category based on the click from the services page
window.onload = () => {
  filterProduct(selectedServiceId);
};
// getting the id of the clicked button from the services page that was stored in sessionStorage
// const selectedServiceId = sessionStorage.getItem('selectedServiceId');
const selectedServiceId = localStorage.getItem('selectedServiceId');
const categoryButtons = document.querySelectorAll('.service-category');

categoryButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterProduct(btn.id);
  });
});



function filterProduct(value) {
  categoryButtons.forEach((btn) => {
    if (value.toLowerCase() === btn.id) {
      btn.classList.add('text-[var(--chamanke-red)]');
    } else {
      btn.classList.remove('text-[var(--chamanke-red)]');
    }
  });

  let elements = document.querySelectorAll('.image');
  elements.forEach((element) => {
    if (value === 'all') {
      element.classList.remove('hidden');
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  });

  updateElements(value);
}


function updateElements(value) {
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