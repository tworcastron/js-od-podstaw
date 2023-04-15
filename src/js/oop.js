// poprzedni sposób
const product = {
  title: 'JS od podstaw',
  price: 12,
};

// OOP:
// kształt/struktura/klasa
// function Product(title, price) {
//   this.name = title;
//   this.price = price;
// }
// // obiekty dziedziczą wartości z prototypu
// Product.prototype.getTitle = function() { return this.name; }
// Product.prototype.setTitle = function(title) { this.name = title; }

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price; 
  }

  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
}
class PromotionProduct extends Product {
  constructor(title, price) {
    super(title, price);
    // this.title = "Kurs na promocji: " + title;
  }

  getPromotionPrice() {
    return this.price - 10;
  }
  getTitle() {
    return "Kurs na promocji: " + this.title;
  }
}

// obiekt
const p1 = new Product('JS od podstaw', 100);
const p2 = new PromotionProduct('PHP od podstaw', 80);

// p1.setTitle('JS dla zaawansowanych');
// console.log(p1.getTitle());
// console.log(p2.getPromotionPrice());
// console.log(p2.getTitle());

// pobrać prototyp
// console.log(Object.getPrototypeOf('text'));
// console.log(p2.__proto__);