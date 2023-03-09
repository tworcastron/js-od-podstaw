// definicja elementow
const coursesList = document.querySelector('.coursers-list');
const counter = document.querySelector('.counter');

function createCart() {
  // // lista produktów
  const items = [];

  const refreshProductsCount = () => counter.innerText = items.length;

  const add = (title, price, quantity = 1) => { // parametry
    items.push({ title, price, quantity });
    refreshProductsCount();
    console.log(items);
  }

  return {
    add,
  };
}

const cart = createCart();
console.log(cart);

// funckja ktora obsluzy kolor buttona
const addClass = (className, text) => {
  return (element) => {
    element.classList.add(className);
    element.innerText = text;
  }
}
const addClassInCart = addClass('in-cart', 'Dodano');

// obsługa buttona
const addToCartHandler = (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const title = e.target.dataset.title;
  const price = Number(e.target.dataset.price);
  cart.add(title, price); // argumenty
  addClassInCart(e.target);
}

// listenery
coursesList.addEventListener('click', addToCartHandler);