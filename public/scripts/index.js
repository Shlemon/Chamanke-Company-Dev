'use strict';

const servicesSection = {
  servicesContainer: document.querySelector('#services-container'),
  services: document.querySelectorAll('#services-container .service'),
  nextServiceBtn: document.querySelector('#nextServiceBtn'),
  prevServiceBtn: document.querySelector('#prevServiceBtn'),
};
const { servicesContainer, services, nextServiceBtn, prevServiceBtn } = servicesSection;

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
  container.addEventListener('click', (e) => {
    if (container === servicesContainer) {
      if (e.target.closest('#nextServiceBtn, #nextServiceBtn svg')) {
        nextItem(services, serviceIndex, (newIndex) => {
          serviceIndex = newIndex; // update the value of serviceIndex with the new index.
        });
      }
      if (e.target.closest('#prevServiceBtn, #prevServiceBtn svg')) {
        prevItem(services, serviceIndex, (newIndex) => {
          serviceIndex = newIndex;
        });
      }
    } else if (container === reviewsContainer) {
      if (e.target.closest('#nextReviewBtn, #nextReviewBtn svg')) {
        nextItem(reviews, reviewIndex, (newIndex) => {
          reviewIndex = newIndex;
        });
      }
      if (e.target.closest('#prevReviewBtn, #prevReviewBtn svg')) {
        prevItem(reviews, reviewIndex, (newIndex) => {
          reviewIndex = newIndex;
        });
      }
    }
  });
  // touch events
  pointerEvents(container);
});

function nextItem(items, itemIndex, callback) {
  // fade out current content
  items[itemIndex].classList.remove('fade-in');
  items[itemIndex].classList.add('fade-out');

  setTimeout(() => {
    items[itemIndex].classList.add('hidden');

    itemIndex++;
    if (itemIndex >= items.length) itemIndex = 0;

    items[itemIndex].classList.remove('hidden');

    // fade in the next content
    items[itemIndex].classList.remove('fade-out');
    items[itemIndex].classList.add('fade-in');

    callback(itemIndex); // call the callback function with the updated value of itemIndex
  }, 500);
}

function prevItem(items, itemIndex, callback) {
  items[itemIndex].classList.remove('fade-in');
  items[itemIndex].classList.add('fade-out');

  setTimeout(() => {
    items[itemIndex].classList.add('hidden');

    itemIndex--;
    if (itemIndex < 0) itemIndex = items.length - 1;

    items[itemIndex].classList.remove('hidden');

    items[itemIndex].classList.remove('fade-out');
    items[itemIndex].classList.add('fade-in');

    callback(itemIndex);
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
    slideInterval(2500);

    containers.forEach((container) => {
      container.addEventListener('pointerenter', () => {
        clearInterval(intervalId);
      });
      container.addEventListener('pointerleave', () => {
        slideInterval(2500);
      });
    });
  }
}
autoSlide();
