"use strict";

// definicja elementow
const coursesList = document.querySelector('.coursers-list');
const counter = document.querySelector('.counter');
const buttonsCart = document.querySelectorAll('.cart-button');

function createCart() {
  // // lista produktów
  let items = [];

  const refreshProductsCount = () => counter.innerText = items.length;

  const updateStore = () => {
    // zapisać dane do localStorage
    localStorage.setItem('items', JSON.stringify(items));
  }

  const setItems = newItems => {
    items = newItems;
    updateStore();
    refreshProductsCount();
  }

  const add = (id, title, price, quantity = 1) => { // parametry
    items.push({ id, title, price, quantity });
    refreshProductsCount();
    updateStore();
  }

  const remove = (id) => {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
    refreshProductsCount();
    updateStore();
  }

  const hasItem = (id) => {
    return items.find(item => item.id === id);
  }

  return {
    add,
    remove,
    setItems,
    hasItem,
  };
}

const cart = createCart();

const startItems = JSON.parse(localStorage.getItem('items'));
if (startItems) {
  cart.setItems(startItems);
}


// funckja ktora obsluzy kolor buttona
const toggleClass = (className, text, mode) => {
  // mode = 'add', 'remove'
  return (element) => {
    element.classList[mode](className);
    element.innerText = text;
  }
}
const addClassInCart = toggleClass('in-cart', 'Usuń z koszyka', 'add');
const removeClassInCart = toggleClass('in-cart', 'Dodaj do koszyka', 'remove');

// obsługa buttona
const addToCartHandler = (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const title = e.target.dataset.title;
  const price = Number(e.target.dataset.price);
  const id = Number(e.target.dataset.id);


  if (cart.hasItem(id)) {
    cart.remove(id);
    removeClassInCart(e.target);
  } else {
    cart.add(id, title, price); // argumenty
    addClassInCart(e.target);
  }
}

// listenery
coursesList.addEventListener('click', addToCartHandler);

// ustawić kolor buttonów domyślnie
buttonsCart.forEach(button => {
  if (cart.hasItem(+button.dataset.id)) {
    addClassInCart(button);
  }
});