const container = {
  servicesContainer: document.querySelector('#servicesContainer'),
  img: document.querySelector('#servicesImg'),
  title: document.querySelector('#servicesTitle'),
  description: document.querySelector('#servicesDescription'),
  btn: document.querySelector('#civil'), // changed the id here to apply it to the filtering function
};

container.btn.addEventListener('click', (e) => {
  const clickedId = e.target.id;

  sessionStorage.setItem('selectedServiceId', clickedId);
});


const services = [
  {
    title: 'WE BUILD YOUR HOME SECURE AND SAFE',
    image: 'img/Snow-removing.jpg',
    description: 'Get All Your Civil Needs Done In An Effiecnt Way',
    btnId: 'civil',
    btnHref: 'aaaaaa',
  },
  {
    title: 'Catering & Housekeeping',
    image: 'img/services/Catering.jpg',
    description: 'A Catering Service You can Trust',
    btnId: 'catering',
    btnHref: './services pages/Civil Works.html',
  },
  {
    title: 'logistics',
    image: 'img/services/logistics.jpg',
    description: 'Logistics info',
    btnId: 'logistics',
    btnHref: 'cccccc',
  },
  {
    title: 'Procurment & Supply Chain',
    image: 'img/services/Utility.jpeg',
    description: 'Procurement & Supply Chain info',
    btnId: 'procurement',
    btnHref: 'dddddd',
  },
  {
    title: 'Mechanical & Maintenance Works',
    image: 'img/services/Oil Trading.jpg',
    description: 'Mechanical & Maintenance Works info',
    btnId: 'maintenance',
    btnHref: 'eeeeee',
  },
];

const nextBtn = document.querySelector('#sliderNextBtn');
const prevBtn = document.querySelector('#sliderPrevBtn');
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
  // container.btn.href = currentData.btnHref;
  container.btn.id = currentData.btnId;

  // fade in the next content
  container.img.classList.remove('fade-out');
  container.img.classList.add('fade-in');
  // console.log(currentData.btnId);
  // console.log(currentData.btnHref);
}

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
    if (delta > 50) {
      isDragging = false;
      nextBtn.click();
    } else if (delta < -50) {
      isDragging = false;
      prevBtn.click();
    }
  }
});

container.servicesContainer.addEventListener('pointerup', () => {
  isDragging = false;
  container.servicesContainer.style.cursor = 'default';
});

// // Touch events
// let touchStartX = 0;
// let touchEndX = 0;

// servicesContainer.addEventListener('touchstart', (e) => {
//   // console.log(e.targetTouches); // this only works when our target (the servicesContainer) is touched

//   touchStartX = e.touches[0].clientX;
// });

// servicesContainer.addEventListener('touchend', (e) => {
//   touchEndX = e.changedTouches[0].clientX;
//   if (touchEndX < touchStartX) {
//     nextBtn.click();
//   } else if (touchEndX > touchStartX) {
//     prevBtn.click();
//   }
// });

// ['mousemove', 'touchmove'].forEach((event) => {
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
