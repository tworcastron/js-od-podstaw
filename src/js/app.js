const product1 = { price: 10 };
const product2 = { price: '20' };
const discount = 10;

// String(), Number(), Boolean() !!
if (isNaN(+product2.price)) {
  console.log('Podano niepoprawny typ danych');
}

const total = Number(product1.price) + Number(product2.price);
const totalWithDiscount = total - 10;

console.log(`
  Cena przed zniżką: ${total}
  Cena po zniżce: ${totalWithDiscount}
`);