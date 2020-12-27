new Swiper ('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  initialSlide: 2,
  autoplay: {
    delay: 2500
  }
})

window.addEventListener ('click', (event) => {
  
  // Counter minus
  if (event.target.hasAttribute ('data-minus')) {
    let counter = event.target.closest ('.counter').querySelector ('[data-counter]');
    if (counter.value == 0) {
      counter.value = 0;
    } else {
      counter.value = parseInt (counter.value) - 1;
    }
  }
  
  // Counter plus
  if (event.target.hasAttribute ('data-plus')) {
    let counter = event.target.closest ('.counter').querySelector ('[data-counter]');
    counter.value = parseInt (counter.value) + 1;
  }
})

$ (() => {
  $ ('.catalog').mousewheel (function (e, delta) {
    this.scrollLeft -= (delta * 30);
    e.preventDefault ();
  });
})

lazyload ();


///////////////////////////////////////////

const products = []


const plusFunction = (id) => {
  const startPrice = document.querySelector (`[data-id="${id}"]`).closest ('.product-item').querySelector ('.price').innerText
  const title = document.querySelector (`[data-id="${id}"]`).closest ('.product-item').querySelector ('.product-item__title').innerText
  
  if (!products[id]) {
    products[id] = {
      count: 1,
      title,
      startPrice,
      price: startPrice,
    }
  } else {
    products[id] = {
      ...products[id],
      count: ++products[id].count,
      price: parseFloat (products[id].startPrice * products[id].count).toFixed (2)
    }
  }
  parseFunction (products)
}

const minusFunction = (id) => {
  if (products[id].count == 1) {
    delete products[id]
  } else {
    products[id] = {
      ...products[id],
      count: --products[id].count,
      price: parseFloat (products[id].startPrice * products[id].count).toFixed (2)
    }
  }
  parseFunction (products)
}

const parseFunction = (products) => {
  const cardList = document.querySelector ('.card__list')
  
  const itemCard = Object.keys (products).map (item => (
      `
    <div class="item-card card__item">
    <div class="item-card__text">
      <div class="item-card__title">${products[item].title}</div>
      <div class="item-card__price">${products[item].price} руб</div>
    </div>
    <div class="item-card__description">(10 шт - 554гр)</div>
    <div class="item-card__counter">
    <div class="counter">
      <form action="#">
        <div class="minus" data-minus data-id="${item}">-</div>
        <input type="text" value="${products[item].count}" data-counter />
        <div class="plus" data-plus data-id="${item}">+</div>
      </form>
    </div>
    </div>
  </div>
  `
  )).join ('')
  
  cardList.innerHTML = itemCard
}

document.body.addEventListener ('click', event => {
  const id = event.target.dataset.id
  if (event.target.classList.contains ('plus')) {
    plusFunction (id)
    
  } else if (event.target.classList.contains ('minus')) {
    minusFunction (id)
  }
})


////////////////////////

const elModal = document.querySelector('.modal')
const elModalClose = document.querySelector('.modal__close')
const elHeaderLogin = document.querySelector('.header__login')

elHeaderLogin.addEventListener('click', ()=> {
  elModal.setAttribute('style', 'display: flex')
  document.body.setAttribute('style', 'overflow: hidden')
})

elModalClose.addEventListener('click', ()=> {
  elModal.setAttribute('style', 'display: none')
  document.body.setAttribute('style', 'overflow: auto')
})
