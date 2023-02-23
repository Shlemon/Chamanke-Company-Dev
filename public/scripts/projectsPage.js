// const imgContainer = document.querySelector('.image-container');
const popupImgContainer = document.querySelector('.popup-image');
const popupImg = document.querySelector('.popup-image img');
const popupImgX = document.querySelector('.popup-image span');
const images = Array.from(document.querySelectorAll('.image-container img'));

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.previousBtn');


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    popupImgContainer.style.display = 'block';
    popupImg.src = img.getAttribute('src');
    console.log(index);

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
  console.log(e.target);
  if (e.target === popupImgX) {
    popupImgContainer.style.display = 'none';
  } else if (e.target === popupImgContainer) {
    popupImgContainer.style.display = 'none';
  }
});


// add touch events?




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
