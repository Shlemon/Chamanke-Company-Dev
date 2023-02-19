if (document.body.id === 'homePage') {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Projects Slider
  const slider = document.querySelector('#slider-inner');
  const progressBar = document.querySelector('#progress-bar-inner');

  let isDragging = false;

  slider.parentElement.addEventListener('scroll', (e) => {
    // console.log(getScrollPercentage());
    progressBar.style.width = `${getScrollPercentage()}%`;
    // hide the scroll bar
    hideScrollbar();
  });

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    slider.style.cursor = 'grabbing';
  });

  slider.addEventListener('mouseup', (e) => {
    isDragging = false;
    slider.style.cursor = 'grab';
  });
  slider.addEventListener('mouseleave', (e) => {
    isDragging = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (isDragging) {
      slider.parentElement.scrollLeft -= e.movementX;
    }
  });

  // scroll horizentally using mouse wheel
  slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.parentElement.scrollLeft += e.deltaY;
  });

  function getScrollPercentage() {
    return (slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100;
  }

  function hideScrollbar() {
    if (getScrollPercentage()) {
      progressBar.parentElement.classList.remove('hidden');
    } else {
      progressBar.parentElement.classList.add('hidden');
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Reviews Section
  const carouselItems = document.querySelectorAll('.carosuel-item');
  const reviews = document.querySelectorAll('.review');

  let slideIndex = 0;
  showSlides(reviews);
  showSlides(carouselItems);

  function showSlides(items) {
    let i;
    for (i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > items.length) {
      slideIndex = 1;
    }

    items[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000, items); // Change image every 3 seconds
  }
}




if (document.body.id === 'company') {
  // show certificates animations

  window.addEventListener('scroll', reveal);

  function reveal() {
    const elmsToReveal = document.querySelectorAll('.reveal');

    for (let i = 0; i < elmsToReveal.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = elmsToReveal[i].getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        elmsToReveal[i].classList.add('active');
      } else {
        elmsToReveal[i].classList.remove('active');
      }
    }
  }
}



const pages = ['homePage', 'company', 'staff'];
if (pages.some(el => pages.includes(el))) {
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

 
}
  
// script that runs on all pages

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


  



// if (document.body.id === 'homePage' || document.body.id === 'company' || document.body.id === 'staff') {
  // const toTopBtn = document.querySelector('#toTopBtn');
  // window.addEventListener('scroll', handleScroll);

  // function handleScroll() {
  //   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  //     // toTopBtn.classList.add('opacity-100')
  //     toTopBtn.style.opacity = 1;
  //     screen.width <= 450 ? (toTopBtn.style.right = '15px') : (toTopBtn.style.right = '50px');
  //   } else {
  //     // toTopBtn.classList.remove('opacity-100');
  //     toTopBtn.style.opacity = 0;
  //     toTopBtn.style.right = '0px';
  //   }
  // }

  // toTopBtn.addEventListener('click', () => {
  //   document.documentElement.scrollTop = 0;
  //   document.body.scrollTop = 0;
  // });
// }

