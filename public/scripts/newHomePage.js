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
  startPosition = e.clientX
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
