const popupImgContainer = document.querySelector('.popup-image');
const popupImg = document.querySelector('.popup-image img');
const popupImgX = document.querySelector('.popup-image span');
const images = Array.from(document.querySelectorAll('.image-container img'));

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.previousBtn');

// images gallery function

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    popupImgContainer.style.display = 'block';
    popupImg.src = img.getAttribute('src');
    toTopBtn.style.opacity = 0;

    nextBtn.addEventListener('click', () => {
      index++;
      if (index > images.length - 1) {
        index = 0;
      }
      popupImg.src = images[index].src;
    });

    prevBtn.addEventListener('click', () => {
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
      popupImg.src = images[index].src;
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowRight') {
        index++;
        if (index > images.length - 1) {
          index = 0;
        }
        popupImg.src = images[index].src;
      } else if (e.code === 'ArrowLeft') {
        index--;
        if (index < 0) {
          index = images.length - 1;
        }
        popupImg.src = images[index].src;
      }
      // console.log(e.code)
      // console.log(e.key)
    });
  });
});


popupImgContainer.addEventListener('click', (e) => {
  if (e.target === popupImgX) {
    popupImgContainer.style.display = 'none';
  } else if (e.target === popupImgContainer) {
    popupImgContainer.style.display = 'none';
  }
});


// add touch events?

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nav burger buttons
const navTogglers = document.querySelectorAll('.navToggle');
const navMenus = document.querySelectorAll('.navMenu');
const toggleBars = document.querySelector('#toggleBars');

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Testing multiple events

// ['click', 'keydown'].forEach((event) => {
//   nextBtn.addEventListener(event, () => {
//     index++;
//     if (index > images.length - 1) {
//       index = 0;
//     }
//     popupImg.src = images[index].src;
//   });

//   prevBtn.addEventListener(event, () => {
//     index++;
//     if (index > images.length - 1) {
//       index = 0;
//     }
//     popupImg.src = images[index].src;
//   });
// });
