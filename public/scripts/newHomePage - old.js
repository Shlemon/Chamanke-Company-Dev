const nextBtn = document.querySelector('#sliderNextBtn');
const prevBtn = document.querySelector('#sliderPrevBtn');

const container = {
  servicesContainer: document.querySelector('#container.servicesContainer'),
  img: document.querySelector('#servicesImg'),
  title: document.querySelector('#servicesTitle'),
  info: document.querySelector('#servicesInfo'),
  btn: document.querySelector('#servicesBtn').href,
};

const services = {
  catering: {
    image: 'img/services/Catering.jpg',
    title: 'Catering & Housekeeping',
    info: 'A Catering Service You can Trust',
    btn: 'aaaaaa',
  },
  logistics: {
    image: 'img/services/logistics.jpg',
    title: 'Logistics Title',
    info: 'Logistics info',
    btn: 'bbbbbb',
  },
  'Procurment & Supply Chain': {
    image: 'img/services/Utility.jpeg',
    title: 'Procurement & Supply Chain Title',
    info: 'Procurement & Supply Chain info',
    btn: 'cccccc',
  },
  'Mechanical & Maintenance Works': {
    image: 'img/services/Oil Trading.jpg',
    title: 'Mechanical & Maintenance Works Title',
    info: 'Mechanical & Maintenance Works info',
    btn: 'cccccc',
  },
};

nextBtn.addEventListener('click', () => {
  iterate(services);

  // for (let service of services) {
  //   console.log(i);

  //   // container.img.src = service.image;
  //   // container.title.textContent = service.title;
  //   // container.info.textContent = service.info;
  //   // container.btn = service.btn;
  // }
});

const iterate = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(obj[key].title);

    container.img.src = obj[key].image
    container.title.textContent = obj[key].title;
    container.info.textContent = obj[key].info;
    // container.btn = service.btn;
    // console.log(`key: ${key}, value: ${obj[key]}`);

    // if (typeof obj[key] === 'object' && obj[key] !== null) {
    //   iterate(obj[key]);
    // }
  });
};

// deep iterator

// const iterate = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     console.log(`key: ${key}, value: ${obj[key]}`);

//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       iterate(obj[key]);
//     }
//   });
// };

// working oldd
// services.img.src = services.logistics.image
// services.title.textContent = services.catering.title
// services.info.textContent = services.catering.info
// services.btn = services.catering.btn
