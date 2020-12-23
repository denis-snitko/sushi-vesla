window.addEventListener('click', (event) => {

  const mainSwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 24,
    initialSlide: 2,
    centeredSlides: true,
  });


  // Counter minus
  if (event.target.hasAttribute('data-minus')) {
    let counter = event.target.closest('.counter').querySelector('[data-counter]');
    if (counter.value == 1) {
      counter.value = 1;
    } else {
      counter.value = parseInt(counter.value) - 1;
    }
  }

  // Counter plus
  if (event.target.hasAttribute('data-plus')) {
    let counter = event.target.closest('.counter').querySelector('[data-counter]');
    counter.value = parseInt(counter.value) + 1;
  }

})