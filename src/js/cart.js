const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const discount = 10;
let discountEnabled = false;

// definicja elementow
const discountElement = document.querySelector('#discount');
const discountCheckbox = document.querySelector('#add-discount');
const itemsContainer = document.querySelector('#items');

// dodaj produkty do tabeli
const addItem = (item) => {
  itemsContainer.innerHTML += `<tr>
          <td><button class="delete">x</button></td>
          <td>${item.title}</td>
          <td><input class="quantity" type="number" value="1"></td>
          <td>${item.price}</td>
        </tr>`;
}
addItem(product1);
addItem(product2);

// usuwanie wierszy
const removeRow = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const row = e.target.closest('tr');
    row.remove();
  }
}
const removeRowFromQuantity = (e) => {
  if (Number(e.target.value) === 0) {
    const row = e.target.closest('tr');
    row.remove();
  }
}

// zmień kolo tła wiersza
const markBg = (e) => {
  if (e.target.tagName === 'TD') {
    e.target.closest('tr').classList.toggle('marked');
  }
}

// dodaj zniżke
const addDiscount = (e) => {
  discountEnabled = e.target.checked;
  if (discount > 0) {
    document.querySelector('#discount-amount').innerHTML = -discount;
    discountElement.classList.toggle('hidden');
  }
  calculatePrice();
}

// cena całkowita
const calculatePrice = () => {
  let total = Number(product1.price) + Number(product2.price);
  if (discountEnabled) {
    total -= discount;
  }

  document.querySelector('#total-price').innerHTML = total;
}
calculatePrice();

// listenery
discountCheckbox.addEventListener('click', addDiscount);
itemsContainer.addEventListener('click', markBg);
itemsContainer.addEventListener('click', removeRow);
itemsContainer.addEventListener('change', removeRowFromQuantity);

// zaznacz checkbox na początku jeśli trzeba
const discountShouldBeEnabled = +discountElement
  .dataset
  .discountShouldBeEnabled;

if (discountShouldBeEnabled) {
  discountCheckbox.click();
}