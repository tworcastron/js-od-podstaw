const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const discount = 10;

// dodaj produkty do tabeli
const itemsContainer = document.querySelector('#items');
let counter = 1;
function addItem(item) {
  itemsContainer.innerHTML += `<tr>
          <td>${counter++}</td>
          <td>${item.title}</td>
          <td>1</td>
          <td>${item.price}</td>
        </tr>`;
}
addItem(product1);
addItem(product2);

// String(), Number(), Boolean() !!
if (isNaN(+product2.price)) {
  console.log('Podano niepoprawny typ danych');
}

const total = Number(product1.price) + Number(product2.price);
const totalWithDiscount = total - 10;

// cena całkowita
document.querySelector('#total-price').innerHTML = total;

console.log(`
  Cena przed zniżką: ${total}
  Cena po zniżce: ${totalWithDiscount}
`);