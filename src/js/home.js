"use strict";

import createCart from './helpers/createCart.js';

// definicja elementow
const coursesList = document.querySelector('.coursers-list');
const counter = document.querySelector('.counter');
const buttonsCart = document.querySelectorAll('.cart-button');

const cart = createCart(counter);

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