'use strict';

// SERVICES Section
const services = [
  {
    title: 'Construction & building materials trade ',
    image: 'img/Snow-removing.jpg',
    description: 'Get All Your Civil Needs Done In An Effiecnt Way',
    data: 'civil',
  },
  {
    title: 'Catering & Housekeeping',
    image: 'img/services/Catering.jpg',
    description: 'A Catering Service You can Trust',
    data: 'catering',
  },
  {
    title: 'logistics',
    image: 'img/services/logistics.jpg',
    description: 'Logistics info',
    data: 'logistics',
  },
  {
    title: 'Procurment & Supply Chain',
    image: 'img/services/Oil Trading.jpg',
    description: 'Procurement & Supply Chain info',
    data: 'procurement',
  },
  {
    title: 'Mechanical & Maintenance Works',
    image: 'img/services/Utility.jpeg',
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

servicesContainer.addEventListener('click', (e) => {
  if (e.target.closest('#nextServiceBtn, #nextServiceBtn svg')) {
    currentIndex++;
    if (currentIndex >= services.length) currentIndex = 0;

    crossfade();
  }

  if (e.target.closest('#prevServiceBtn, #prevServiceBtn svg')) {
    currentIndex--;
    if (currentIndex < 0) currentIndex = services.length - 1;

    crossfade();
  }
});

// pointer events (mouse + touch + stylus...etc.)
let currentIndex = 0;
let isDragging = false;
let startPosition = null;

servicesContainer.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX;
  servicesContainer.style.cursor = 'grabbing';
});

servicesContainer.addEventListener('pointermove', (e) => {
  e.preventDefault();
  if (isDragging) {
    const delta = e.clientX - startPosition;
    if (delta > 11) {
      isDragging = false;
      nextServiceBtn.click();
    } else if (delta < -11) {
      isDragging = false;
      prevServiceBtn.click();
    }
  }
});

servicesContainer.addEventListener('pointerup', () => {
  isDragging = false;
  servicesContainer.style.cursor = 'default';
});

function crossfade() {
  // fade out current content
  serviceImg.classList.remove('fade-in');
  serviceImg.classList.add('fade-out');

  setTimeout(() => {
    updateElements();
  }, 500);
}

function updateElements() {
  const currentService = services[currentIndex];

  serviceImg.src = currentService.image;
  serviceTitle.textContent = currentService.title;
  serviceDescription.textContent = currentService.description;
  serviceBtn.setAttribute('data-service', currentService.data);

  // fade in the next content
  serviceImg.classList.remove('fade-out');
  serviceImg.classList.add('fade-in');
}

// Reviews Section
const reviewsSection = {
  reviewsContainer: document.querySelector('.reviews-container'),
  reviews: document.querySelectorAll('.reviews-container .review'),
  nextReviewBtn: document.querySelector('#nextReview'),
  prevReviewBtn: document.querySelector('#prevReview'),
};

const { reviewsContainer, reviews, nextReviewBtn, prevReviewBtn } = reviewsSection;

nextReviewBtn.addEventListener('click', nextReview);
prevReviewBtn.addEventListener('click', prevReview);

let currentReview = 0;
function nextReview() {
  // remove the class added at the end
  reviews[currentReview].classList.remove('slide-left-in');

  // slide out the current review
  reviews[currentReview].classList.add('slide-left-out');

  setTimeout(() => {
    reviews[currentReview].classList.add('hidden');

    currentReview++;
    if (currentReview >= reviews.length) currentReview = 0;

    // remove classes from the next review after increasing the index
    reviews[currentReview].classList.remove('hidden');
    reviews[currentReview].classList.remove('slide-left-out');

    // animate new review entering from the right
    reviews[currentReview].classList.add('slide-left-in');
  }, 500);
}

function prevReview() {
  reviews[currentReview].classList.remove('slide-right-in');
  reviews[currentReview].classList.add('slide-right-out');

  setTimeout(() => {
    reviews[currentReview].classList.add('hidden');

    currentReview--;
    if (currentReview < 0) currentReview = reviews.length - 1;

    reviews[currentReview].classList.remove('hidden');
    reviews[currentReview].classList.remove('slide-right-out');

    reviews[currentReview].classList.add('slide-right-in');
  }, 500);
}

reviewsContainer.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX;
  reviewsContainer.style.cursor = 'grabbing';
});

reviewsContainer.addEventListener('pointermove', (e) => {
  e.preventDefault();
  if (isDragging) {
    const delta = e.clientX - startPosition;
    if (delta > 11) {
      isDragging = false;
      prevReviewBtn.click();
    } else if (delta < -11) {
      isDragging = false;
      nextReviewBtn.click();
    }
  }
});

reviewsContainer.addEventListener('pointerup', () => {
  isDragging = false;
  reviewsContainer.style.cursor = 'default';
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  nextServiceBtn.click();
  nextReviewBtn.click();
}, 5000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  // e.preventDefault();
  console.log('form submitted');
});
