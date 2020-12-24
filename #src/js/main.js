
const mainSwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  initialSlide: 2,
  centeredSlides: true,
});

lazyload();

window.addEventListener('click', (event) => {

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

$(() => {
  $('.catalog').mousewheel(function (e, delta) {
    this.scrollLeft -= (delta * 30);
    e.preventDefault();
  });
})

const elminusBtn = document.querySelector('.minus')
const elPlusBtn = document.querySelector('.plus')
const elCard = document.querySelector('.card')

const products = {
  "id1": 1,
  "id2": 1,
  "id3": 1,
  "id4": 1,
  "id5": 1,
  "id6": 1,
  "id7": 1,
  "id8": 1,
  "id9": 1,
  "id10": 1,
}

const plusFunction = id => {
  products[id] += 1
}
const minusFunction = id => {
  products[id] == 0 ? products[id] = 1 : products[id] -= 1
}
const parseFunction = (item, id) => {
  const title = item.closest('.product-item').querySelector('.product-item__title').textContent
  const price = item.closest('.product-item').querySelector('.price').textContent

  const itemCard = `
    <div class="item-card card__item">
    <div class="item-card__text">
      <div class="item-card__title">${title}</div>
      <div class="item-card__price">${price} руб</div>
    </div>
    <div class="item-card__description">(10 шт - 554гр)</div>
    <div class="item-card__counter">
    <div class="counter">
      <form action="#">
        <div class="minus" data-minus data-id="${id}">-</div>
        <input type="text" value="${products[id]}" data-counter />
        <div class="plus" data-plus data-id="${id}">+</div>
      </form>
    </div>
    </div>
  </div>
  `
 

  if ((elCard.querySelector('.plus').dataset.id) != id) {
    elCard.insertAdjacentHTML('afterbegin', itemCard)

  } 
}

document.body.addEventListener('click', event => {

  const id = event.target.dataset.id

  if (event.target.classList.contains('plus')) {
    plusFunction(id)
    parseFunction(event.target, id)
  } else if (event.target.classList.contains('minus')) {
    minusFunction(id)
  }

})
