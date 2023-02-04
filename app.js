const product1 = { price: 10 }
const product2 = { price: '20' }
const discount = 10

console.log(typeof product1.price);
console.log(typeof '20');
console.log(typeof '20');

const total = product1.price + product2.price
const totalWithDiscount = total - 10

console.log(`
  Cena przed zniżką: ${total}
  Cena po zniżce: ${totalWithDiscount}
`)