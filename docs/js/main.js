
const mainSwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  initialSlide: 2,
  centeredSlides: true,
});

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

lazyload();


///////////////////////////////////////////

const elMinusBtn = document.querySelector('.minus')
const elPlusBtn = document.querySelector('.plus')
const elCard = document.querySelector('.card')

const products = {
  "id1": 0,
  "id2": 0,
  "id3": 0,
  "id4": 0,
  "id5": 0,
  "id6": 0,
  "id7": 0,
  "id8": 0,
  "id9": 0,
  "id10": 0,
}

const plusFunction = (id) => {
  products[id] ++
  // console.log(event.target.dataset.id);
  // (elCard.querySelector('.plus').dataset.id == id)
  
  if (products[id] > 1 ) {
    elCard.querySelector('.plus')
    elCard.querySelector('.plus').previousElementSibling.value = parseInt(products[id]);
  } else {
    parseFunction(event.target, id, (products[id]))
  }
}

const minusFunction = (id, event) => {
  if (products[id] == 0) {
    // elCard.querySelector('.plus').closest('.item-card').remove()
  } else {
    products[id] -= 1
  }
}

const parseFunction = (item, id, count) => {
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
        <input type="text" value="${count}" data-counter />
        <div class="plus" data-plus data-id="${id}">+</div>
      </form>
    </div>
    </div>
  </div>
  `
    elCard.insertAdjacentHTML('afterbegin', itemCard)
}

document.body.addEventListener('click', event => {

  const id = event.target.dataset.id

  if (event.target.classList.contains('plus')) {
    plusFunction(id, event)

  } else if (event.target.classList.contains('minus')) {
    minusFunction(id, event)
  }

})
