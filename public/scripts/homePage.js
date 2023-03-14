//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nav burger buttons
const navTogglers = document.querySelectorAll('.navToggle');
const navMenus = document.querySelectorAll('.navMenu');
const toggleBars = document.querySelector('#toggleBars');

// change the if() to check wether the nav menu is displayed or not
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const container = {
  servicesContainer: document.querySelector('#servicesContainer'),
  img: document.querySelector('#servicesImg'),
  title: document.querySelector('#servicesTitle'),
  description: document.querySelector('#servicesDescription'),
  btn: document.querySelector('#civil'),
  nextBtn: document.querySelector('#sliderNextBtn'),
  prevBtn: document.querySelector('#sliderPrevBtn'),
};

// store the id of the clicked service to use it for the filtering in the projects page
container.btn.addEventListener('click', (e) => {
  const clickedId = e.target.id;

  // sessionStorage.setItem('selectedServiceId', clickedId);
  localStorage.setItem('selectedServiceId', clickedId);
});

let currentIndex = 0;
let isDragging = false;
let startPosition = null;

container.servicesContainer.addEventListener('click', (e) => {
  if (e.target.closest('#sliderNextBtn, #sliderNextBtn svg')) {
    currentIndex++;
    if (currentIndex >= services.length) currentIndex = 0;

    crossfade();
  }

  if (e.target.closest('#sliderPrevBtn, #sliderPrevBtn svg')) {
    currentIndex--;
    if (currentIndex < 0) currentIndex = services.length - 1;

    crossfade();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
// pointer events (mouse + touch + stylus...etc.)

container.servicesContainer.addEventListener('pointerdown', (e) => {
  // prevent selecting
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX;
  container.servicesContainer.style.cursor = 'grabbing';
});

container.servicesContainer.addEventListener('pointermove', (e) => {
  // prevent selecting
  e.preventDefault();
  if (isDragging) {
    const delta = e.clientX - startPosition;
    if (delta > 11) {
      isDragging = false;
      container.nextBtn.click();
    } else if (delta < -11) {
      isDragging = false;
      container.prevBtn.click();
    }
  }
});

container.servicesContainer.addEventListener('pointerup', () => {
  isDragging = false;
  container.servicesContainer.style.cursor = 'default';
});

function crossfade() {
  // fade out current content
  container.img.classList.remove('fade-in');
  container.img.classList.add('fade-out');

  setTimeout(() => {
    updateElements();
  }, 500);
}

function updateElements() {
  const currentData = services[currentIndex];

  container.img.src = currentData.image;
  container.title.textContent = currentData.title;
  container.description.textContent = currentData.description;
  container.btn.id = currentData.btnId;

  // fade in the next content
  container.img.classList.remove('fade-out');
  container.img.classList.add('fade-in');
}

const services = [
  {
    title: 'Construction & building materials trade ',
    image: 'img/Snow-removing.jpg',
    description: 'Get All Your Civil Needs Done In An Effiecnt Way',
    btnId: 'civil',
  },
  {
    title: 'Catering & Housekeeping',
    image: 'img/services/Catering.jpg',
    description: 'A Catering Service You can Trust',
    btnId: 'catering',
  },
  {
    title: 'logistics',
    image: 'img/services/logistics.jpg',
    description: 'Logistics info',
    btnId: 'logistics',
  },
  {
    title: 'Procurment & Supply Chain',
    image: 'img/services/Oil Trading.jpg',
    description: 'Procurement & Supply Chain info',
    btnId: 'procurement',
  },
  {
    title: 'Mechanical & Maintenance Works',
    image: 'img/services/Utility.jpeg',
    description: 'Mechanical & Maintenance Works info',
    btnId: 'maintenance',
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reviews Section
const reviews = document.querySelectorAll('.reviews-container .review');
const reviewsContainer = document.querySelector('.reviews-container');
let currentReview = 0;
const nextReviewBtn = document.querySelector('#nextReview');
const prevReviewBtn = document.querySelector('#prevReview');




nextReviewBtn.addEventListener('click', nextReview);
prevReviewBtn.addEventListener('click', prevReview);
// reviews[currentReview].classList.remove('hidden');



function nextReview() {
  // slide out the current review
  reviews[currentReview].classList.add('swipe-left');
  // wait for the sliding animation to finish (0.5s)
  setTimeout(() => {
    reviews[currentReview].classList.add('hidden');

    currentReview++;
    if (currentReview >= reviews.length) currentReview = 0;

    // remove hidden and swipe classes from the next review after increasing the index
    reviews[currentReview].classList.remove('hidden');
    reviews[currentReview].classList.remove('swipe-left', 'swipe-right');
  }, 500);
}

function prevReview() {
  reviews[currentReview].classList.add('swipe-right');

  setTimeout(() => {
    reviews[currentReview].classList.add('hidden');

    currentReview--;
    if (currentReview < 0) currentReview = reviews.length - 1;

    reviews[currentReview].classList.remove('hidden');
    reviews[currentReview].classList.remove('swipe-left', 'swipe-right');
  }, 500);
}





// old code without animations

// nextReviewBtn.addEventListener('click', () => {
//   reviews[currentReview].classList.add('.swipe-left');
//   reviews[currentReview].classList.add('hidden');
//   currentReview++;
//   if (currentReview >= reviews.length) {
//     currentReview = 0;
//   }
//   reviews[currentReview].classList.remove('hidden');
//   reviews[currentReview].classList.remove('swipe-left');
// });

// prevReviewBtn.addEventListener('click', () => {
//   reviews[currentReview].classList.add('hidden');
//   currentReview--;
//   if (currentReview < 0) {
//     currentReview = reviews.length - 1;
//   }
//   reviews[currentReview].classList.remove('hidden');
// });

reviewsContainer.addEventListener('pointerdown', (e) => {
  // prevent selecting
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX;
  reviewsContainer.style.cursor = 'grabbing';
});

reviewsContainer.addEventListener('pointermove', (e) => {
  // prevent selecting
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  // e.preventDefault();
  console.log('form submitted');
});
