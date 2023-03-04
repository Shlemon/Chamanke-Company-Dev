//parameter passed from button (Parameter same as category)
function filterProduct(value) {

  let categoryButtons = document.querySelectorAll('.service-category');
  categoryButtons.forEach((button) => {
    //check if value is equal to the service id and give it the active red color
    if (value.toLowerCase() === button.id) {
      button.classList.add('text-[#e04639;]');
    } else {
      button.classList.remove('text-[#e04639;]');
    }
  });

  //select all projects
  let elements = document.querySelectorAll('.image');
  //loop through all project
  elements.forEach((element) => {
    //display all projects on 'all' button click
    if (value === 'all') {
      element.classList.remove('hidden');
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove('hidden');
      } else {
        //hide other elements
        element.classList.add('hidden');
      }
    }
  });

  // change service image and titile
  const serviceImg = document.querySelector('#servicesImg');
  const serviceTitle = document.querySelector('#servicesTitle');
  const servicesImages = {
    all: './img/services/civil-works.jpeg',
    civil: './img/Snow-removing.jpg',
    catering: './img/services/Catering.jpg',
    logistics: './img/services/logistics.jpg',
    procurement: './img/services/Utility.jpeg',
    maintenance: './img/services/Oil Trading.jpg',
  };

  serviceTitle.textContent = value.toUpperCase();
  serviceImg.src = servicesImages[value];
}

// //Initially display all products
// window.onload = () => {
//   filterProduct("all");
// };

// getting the id of the clicked button from the services page that was stored in sessionStorage
const selectedServiceId = sessionStorage.getItem('selectedServiceId');
// console.log(selectedServiceId);

// display the category based on the click from the services page
window.onload = () => {
  filterProduct(selectedServiceId);
};
