// definicja elementow
const coursesList = document.querySelector('.coursers-list');

// lista produktów
const items = [];

const addToCart = (title, price, quantity = 1) => { // parametry
  items.push({ title, price, quantity });
  console.log(items);
}

// obsługa buttona
const addToCartHandler = (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const title = e.target.dataset.title;
  const price = Number(e.target.dataset.price);
  addToCart(title, price); // argumenty
}

// listenery
coursesList.addEventListener('click', addToCartHandler);