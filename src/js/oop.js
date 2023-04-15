// poprzedni sposób
const product = {
  title: 'JS od podstaw',
  price: 12,
};

// OOP:
// kształt/struktura/klasa
function Product(title, price) {
  this.name = title;
  this.price = price;
}
// obiekty dziedziczą wartości z prototypu
Product.prototype.getTitle = function() { return this.name; }
Product.prototype.setTitle = function(title) { this.name = title; }

// obiekt
const p1 = new Product('JS od podstaw', 100);
const p2 = new Product('PHP od podstaw', 80);

p1.setTitle('JS dla zaawansowanych');
console.log(p1.getTitle());
console.log(p2);