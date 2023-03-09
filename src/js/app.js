// Podsumowanie funkcji :)

//////////////////////
// return
//////////////////////

// bez return
function addNumbers(a, b) {
  a + b
}
addNumbers(2,3) // undefined

// z return
function addNumbers(a, b) {
  return a + b
}
addNumbers(2, 3) // 5

// funckja strzałkowa (z return)
const addNumbers = (a, b) => a + b
const addNumbers = (a, b) => {
  return a + b
}

addNumbers(2, 3) // 5

//////////////////////
// hoisting
//////////////////////

add() // function() {}
function add() {}

add() // undefined
var add = function() {}

add() // ERROR - add is not defined
const add = function() {}

//////////////////////
// this
//////////////////////

const cart = {
  price: 10,
  showPrice() { return this.price; },
};
cart.showPrice(); // 10

//////////////////////
// bind, call, apply
//////////////////////

const dog = {
  getName() { return this.name; },
};
const cat = {
  name: 'Mruczek',
}
dog.getName.call(cat);

// funckja strzałkowa nie tworzy kontekstu!

//////////////////////
// IIFE
//////////////////////

(function() {
  // wartości nie są widoczne poza funkcją
})();

//////////////////////
// parametry domyślne
//////////////////////

const sayHi = (name = 'Bezimienny') => `Witaj ${name}!`
sayHi('Jan') // Witaj Jan!
sayHi() // Witaj Bezimienny!

//////////////////////
// domknięcia
//////////////////////

function createCart() {
  const items = [];
  const add = (item) => items.push(item)

  return {
    add,
  };
}

const newCart = createCart();
newCart.add(/*item*/);

//////////////////////
// funkcje, które zwracają funkcje
//////////////////////

const addClass = (className) => {
  return (element) => {
    element.classList.add(className);
  }
}
const addClassInCart = addClass('in-cart');

addClassInCart(button);

//////////////////////
// callback
//////////////////////

const add = (a, b) => a + b;
const doSmthWithNumbers = (a, b, cb) => {
  cb(a, b);
}

doSmthWithNumbers(1,2, add);

//////////////////////
// ... spread operator
//////////////////////

const getSum = (...args) => {
  // args = [1,2,3]
}

getSum(1,2,3);

//////////////////////
// rekurencje
//////////////////////

const addUntil = (a, untill) => {
  if (a === untill) return a;

  return addUntil(a + 1, untill);
}

addUntil(0, 10); // pętla od 0 do 10