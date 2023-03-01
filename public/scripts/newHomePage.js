const container = {
  servicesContainer: document.querySelector('#servicesContainer'),
  img: document.querySelector('#servicesImg'),
  title: document.querySelector('#servicesTitle'),
  description: document.querySelector('#servicesDescription'),
  btn: document.querySelector('#servicesBtn').href,
};

const services = [
  {
    title: 'WE BUILD YOUR HOME SECURE AND SAFE',
    image: 'img/Snow-removing.jpg',
    description: 'Get All Your Civil Needs Done In An Effiecnt Way',
    btn: 'aaaaaa',
  },
  {
    title: 'Catering & Housekeeping',
    image: 'img/services/Catering.jpg',
    description: 'A Catering Service You can Trust',
    btn: 'bbbbbb',
  },
  {
    title: 'logistics',
    image: 'img/services/logistics.jpg',
    description: 'Logistics info',
    btn: 'cccccc',
  },
  {
    title: 'Procurment & Supply Chain',
    image: 'img/services/Utility.jpeg',
    description: 'Procurement & Supply Chain info',
    btn: 'dddddd',
  },
  {
    title: 'Mechanical & Maintenance Works',
    image: 'img/services/Oil Trading.jpg',
    description: 'Mechanical & Maintenance Works info',
    btn: 'eeeeee',
  },
];

const nextBtn = document.querySelector('#sliderNextBtn');
const prevBtn = document.querySelector('#sliderPrevBtn');
let currentIndex = 0;

container.servicesContainer.addEventListener('click', (e) => {
  if (e.target.closest('#sliderNextBtn, #sliderNextBtn svg')) {
    currentIndex++;
    if (currentIndex >= services.length) currentIndex = 0;

    // fade out current content
    container.img.classList.remove('fade-in');
    container.img.classList.add('fade-out');
    // container.img.classList.add('swipe-left');

    setTimeout(() => {
      updateElements();
    }, 300);
  }

  if (e.target.closest('#sliderPrevBtn, #sliderPrevBtn svg')) {
    currentIndex--;
    if (currentIndex < 0) currentIndex = services.length - 1;

    // fade out current content
    container.img.classList.remove('fade-in');
    container.img.classList.add('fade-out');
    // container.img.classList.add('swipe-left');

    setTimeout(() => {
      updateElements();
    }, 300);
  }
});

function updateElements() {
  const currentData = services[currentIndex];

  container.img.src = currentData.image;
  container.title.textContent = currentData.title;
  container.description.textContent = currentData.description;
  container.btn = currentData.btn;
  
  // fade in the next content
  container.img.classList.remove('fade-out');
  container.img.classList.add('fade-in');
  // container.img.classList.remove('swipe-left');

}










// Touch events
let touchStartX = 0;
let touchEndX = 0;

servicesContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

servicesContainer.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    nextBtn.click()
  } else if (touchEndX > touchStartX) {
    prevBtn.click()
  }
});






// old updateElements function
// function updateElements() {
//   container.img.src = services[currentIndex].image;
//   container.title.textContent = services[currentIndex].title;
//   container.description.textContent = services[currentIndex].description;
//   container.btn = services[currentIndex].btn;
// }

// function updateElements() {
//   const currentData = services[currentIndex];

//   // fade out the content container
//   container.servicesContainer.classList.remove('fade-in');
//   container.servicesContainer.classList.add('fade-out');

//   setTimeout(function () {
//     // update the title
//     container.title.textContent = currentData.title;
//     // fade in the title
//     container.title.classList.remove('fade-out');
//     container.title.classList.add('fade-in');

//     // update the img
//     container.img.src = currentData.image;
//     // fade in the img
//     container.img.classList.remove('fade-out');
//     container.img.classList.add('fade-in');

//     // Update the description
//     container.description.textContent = currentData.description;

//     // Fade in the description
//     container.description.classList.remove('fade-out');
//     container.description.classList.add('fade-in');

//     // Fade in the content container
//     container.servicesContainer.classList.remove('fade-out');
//     container.servicesContainer.classList.add('fade-in');
//   }, 300);

// }

// Touch events
// let touchStartX = 0;
// let touchEndX = 0;

// servicesContainer.addEventListener('touchstart', (event) => {
//   touchStartX = event.touches[0].clientX;
// });

// servicesContainer.addEventListener('touchend', (event) => {
//   touchEndX = event.changedTouches[0].clientX;
//   if (touchEndX < touchStartX) {
//     sliderNextBtn.click();
//   } else if (touchEndX > touchStartX) {
//     sliderPrevBtn.click();
//   }
// });
