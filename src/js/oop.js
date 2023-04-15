// poprzedni sposób
const product = {
  title: 'JS od podstaw',
  price: 12,
};

// OOP:
// kształt/struktura/klasa
function Product(title, price) {
  this.title = title;
  this.price = price;

  
}

// obiekt
const p1 = new Product('JS od podstaw', 100);
const p2 = new Product('PHP od podstaw', 80);

console.log(p1);
console.log(p2);