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
// container.servicesContainer.style.cursor = 'grab';

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

////////////////////////////////////////////////////////////////////////////////////////////////////////
// add 'touchstart' to 'mousedown' and add 'touchmove' to 'mousemove' events


let isDragging = false;
let startPosition = null;

container.servicesContainer.addEventListener('mousedown', (e) => {
  // prevent selecting
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX;
  container.servicesContainer.style.cursor = 'grabbing';
});

// ['mousedown', 'touchstart'].forEach((event) => {
//   container.servicesContainer.addEventListener(event, (e) => {
//     // prevent selecting
//     e.preventDefault();
//     isDragging = true;
//     startPosition = e.clientX;
//     container.servicesContainer.style.cursor = 'grabbing';
//   });
// });



container.servicesContainer.addEventListener('mousemove', (e) => {
  // prevent selecting
  e.preventDefault();
  if (isDragging) {
    const delta = e.clientX - startPosition;
    if (delta > 50) {
      isDragging = false;
      nextBtn.click();
    } else if (delta < -50) {
      isDragging = false;
      prevBtn.click();
    }
  }
});

// ['mousemove', 'touchend'].forEach((event) => {
//   container.servicesContainer.addEventListener(event, (e) => {
//     // prevent selecting
//     e.preventDefault();
//     if (isDragging) {
//       const delta = e.clientX - startPosition;
//       if (delta > 50) {
//         isDragging = false;
//         nextBtn.click();
//       } else if (delta < -50) {
//         isDragging = false;
//         prevBtn.click();
//       }
//     }
//   });
// });


container.servicesContainer.addEventListener('mouseup', () => {
  isDragging = false;
  container.servicesContainer.style.cursor = 'default';
});

// Touch events
let touchStartX = 0;
let touchEndX = 0;

servicesContainer.addEventListener('touchstart', (e) => {
  // console.log(e.targetTouches); // this only works when our target (the servicesContainer) is touched

  // prevent default gestures
  e.preventDefault();
  touchStartX = e.touches[0].clientX;
});

servicesContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    nextBtn.click();
  } else if (touchEndX > touchStartX) {
    prevBtn.click();
  }
});






// container.servicesContainer.addEventListener('mousemove', (e) => {
//   // prevent selecting
//   e.preventDefault();
//   if (isDragging) {
//     const delta = e.clientX - startPosition;
//     if (delta > 50) {
//       isDragging = false;
//       currentIndex++;
//       if (currentIndex >= services.length) currentIndex = 0;
//       // fade out current content
//       container.img.classList.remove('fade-in');
//       container.img.classList.add('fade-out');
//       updateElements();
//     } else if (delta < -50) {
//       isDragging = false;
//       currentIndex--;
//       if (currentIndex < 0) currentIndex = services.length - 1;
//       // fade out current content
//       container.img.classList.remove('fade-in');
//       container.img.classList.add('fade-out');
//       updateElements();
//     }
//   }
// });
