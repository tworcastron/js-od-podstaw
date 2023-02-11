const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const discount = 10;
let discountEnabled = false;

const discountElement = document.querySelector('#discount')

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

// dodaj zniżke
function addDiscount(e) {
  discountEnabled = e.target.checked;
  if (discount > 0) {
    document.querySelector('#discount-amount').innerHTML = -discount;
    discountElement.classList.toggle('hidden');
  }
  calculatePrice();
}

// cena całkowita
function calculatePrice() {
  let total = Number(product1.price) + Number(product2.price);
  if (discountEnabled) {
    total -= discount;
  }

  document.querySelector('#total-price').innerHTML = total;
}
calculatePrice();

// listenery
document
  .querySelector('#add-discount')
  .addEventListener('click', addDiscount);

// zaznacz checkbox na początku jeśli trzeba
const discountShouldBeEnabled = +discountElement
  .dataset
  .discountShouldBeEnabled;

if (discountShouldBeEnabled) {

}