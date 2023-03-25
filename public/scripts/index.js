'use strict';

// SERVICES Section
const services = [
  {
    title: 'Construction & building materials trade ',
    image: 'img/home-page/services/snow-removing.jpg',
    description: 'Get All Your Civil Needs Done In An Effiecnt Way',
    data: 'civil',
  },
  {
    title: 'Catering & Housekeeping',
    image: 'img/home-page/services/catering-.jpg',
    description: 'A Catering Service You can Trust',
    data: 'catering',
  },
  {
    title: 'logistics',
    image: 'img/home-page/services/logistics.jpg',
    description: 'Logistics info',
    data: 'logistics',
  },
  {
    title: 'Procurment & Supply Chain',
    image: 'img/home-page/services/oil-trading.jpg',
    description: 'Procurement & Supply Chain info',
    data: 'procurement',
  },
  {
    title: 'Mechanical & Maintenance Works',
    image: 'img/home-page/services/maintenance.jpeg',
    description: 'Mechanical & Maintenance Works info',
    data: 'maintenance',
  },
];

const servicesSection = {
  servicesContainer: document.querySelector('#servicesContainer'),
  serviceImg: document.querySelector('#servicesImg'),
  serviceTitle: document.querySelector('#servicesTitle'),
  serviceDescription: document.querySelector('#servicesDescription'),
  serviceBtn: document.querySelector('#serviceBtn'),
  nextServiceBtn: document.querySelector('#nextServiceBtn'),
  prevServiceBtn: document.querySelector('#prevServiceBtn'),
};
const { servicesContainer, serviceImg, serviceTitle, serviceDescription, serviceBtn, nextServiceBtn, prevServiceBtn } = servicesSection;

// Reviews Section
const reviewsSection = {
  reviewsContainer: document.querySelector('.reviews-container'),
  reviews: document.querySelectorAll('.reviews-container .review'),
  nextReviewBtn: document.querySelector('#nextReviewBtn'),
  prevReviewBtn: document.querySelector('#prevReviewBtn'),
};
const { reviewsContainer, reviews, nextReviewBtn, prevReviewBtn } = reviewsSection;

let serviceIndex = 0;
let reviewIndex = 0;
let isDragging = false;
let startPosition = null;
let containers = [servicesContainer, reviewsContainer];

containers.forEach((container) => {
  // click events
  container.addEventListener('click', (e) => {
    if (container === servicesContainer) {
      if (e.target.closest('#nextServiceBtn, #nextServiceBtn svg')) {
        nextService();
      }

      if (e.target.closest('#prevServiceBtn, #prevServiceBtn svg')) {
        prevService();
      }
    } else if (container === reviewsContainer) {
      if (e.target.closest('#nextReviewBtn, #nextReviewBtn svg')) {
        nextReview();
      }

      if (e.target.closest('#prevReviewBtn, #prevReviewBtn svg')) {
        prevReview();
      }
    }
  });
  // touch events
  pointerEvents(container);
});

function nextService() {
  serviceIndex++;
  if (serviceIndex >= services.length) serviceIndex = 0;
  crossfade();
}

function prevService() {
  serviceIndex--;
  if (serviceIndex < 0) serviceIndex = services.length - 1;
  crossfade();
}

function crossfade() {
  // fade out current content
  serviceImg.classList.remove('fade-in');
  serviceImg.classList.add('fade-out');

  setTimeout(() => {
    updateElements();
  }, 500);
}

function updateElements() {
  const currentService = services[serviceIndex];

  serviceImg.src = currentService.image;
  serviceTitle.textContent = currentService.title;
  serviceDescription.textContent = currentService.description;
  serviceBtn.setAttribute('data-service', currentService.data);

  // fade in the next content
  serviceImg.classList.remove('fade-out');
  serviceImg.classList.add('fade-in');
}

function nextReview() {
  // clear all the sliding classes
  reviews[reviewIndex].classList.remove('slide-left-in', 'slide-right-in');

  // slide out the current review
  reviews[reviewIndex].classList.add('slide-left-out');

  setTimeout(() => {
    reviews[reviewIndex].classList.add('hidden');

    reviewIndex++;
    if (reviewIndex >= reviews.length) reviewIndex = 0;

    // remove classes from the next review after increasing the index
    reviews[reviewIndex].classList.remove('hidden');
    reviews[reviewIndex].classList.remove('slide-left-out', 'slide-right-out');

    // animate new review entering from the right
    reviews[reviewIndex].classList.add('slide-left-in');
  }, 500);
}

function prevReview() {
  reviews[reviewIndex].classList.remove('slide-right-in', 'slide-left-in');
  reviews[reviewIndex].classList.add('slide-right-out');

  setTimeout(() => {
    reviews[reviewIndex].classList.add('hidden');

    reviewIndex--;
    if (reviewIndex < 0) reviewIndex = reviews.length - 1;

    reviews[reviewIndex].classList.remove('hidden');
    reviews[reviewIndex].classList.remove('slide-right-out', 'slide-left-out');

    reviews[reviewIndex].classList.add('slide-right-in');
  }, 500);
}

function pointerEvents(container) {
  container.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    isDragging = true;
    startPosition = e.clientX;
    container.style.cursor = 'grabbing';
  });

  container.addEventListener('pointermove', (e) => {
    e.preventDefault();
    if (isDragging) {
      const delta = e.clientX - startPosition;
      if (delta > 11) {
        isDragging = false;
        container === servicesContainer ? prevServiceBtn.click() : container === reviewsContainer ? prevReviewBtn.click() : null;
      } else if (delta < -11) {
        isDragging = false;
        container === servicesContainer ? nextServiceBtn.click() : container === reviewsContainer ? nextReviewBtn.click() : null;
      }
    }
  });

  container.addEventListener('pointerup', () => {
    isDragging = false;
    container.style.cursor = 'default';
  });
}

// auto sliding 
let intervalId;
let slideInterval = (interval) => {
  intervalId = setInterval(() => {
    nextServiceBtn.click();
    nextReviewBtn.click();
  }, interval);
};

function autoSlide() {
  let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    slideInterval(2000);

    containers.forEach((container) => {
      container.addEventListener('pointerenter', () => {
        clearInterval(intervalId);
      });
      container.addEventListener('pointerleave', () => {
        slideInterval(2000);
      });
    });
  }
  // else {
  //   // for touch devices
  //   slideInterval(6000);
  // }
}
autoSlide();
