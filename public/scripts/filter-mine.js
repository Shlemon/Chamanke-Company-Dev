//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll('.button-value');
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  //select all cards
  let elements = document.querySelectorAll('.image');
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == 'all') {
      element.classList.remove('hide');
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove('hide');
      } else {
        //hide other elements
        element.classList.add('hide');
      }
    }
  });

  // change service image and titile
  const serviceImg = document.querySelector('#servicesImg');
  const serviceTitle = document.querySelector('#servicesTitle');

  serviceTitle.textContent = value.toUpperCase();
  // serviceImg.src = '../img/services/Oil Trading.jpg'
  serviceImg.src = servicesImages[value]



}


// //Initially display all products
// window.onload = () => {
//   filterProduct("all");
// };

const servicesImages = {
  all: '../img/services/civil-works.jpeg',
  civil: '../img/Snow-removing.jpg',
  catering: '../img/services/Catering.jpg',
  logistics: '../img/services/logistics.jpg',
  procurement: '../img/services/Utility.jpeg',
  maintenance: '../img/services/Oil Trading.jpg',
};

//Initially display all products
// window.onload = () => {
//   filterProduct("all");
// };


// getting the id of the clicked button from the services page that was stored in sessionStorage
const selectedServiceId = sessionStorage.getItem('selectedServiceId');
console.log(selectedServiceId);

// Initially display all products
window.onload = () => {
  filterProduct(selectedServiceId);
};