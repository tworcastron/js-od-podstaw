const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const discount = 10;
let discountEnabled = false;

// definicja elementow
const discountElement = document.querySelector('#discount');
const discountCheckbox = document.querySelector('#add-discount');
const itemsContainer = document.querySelector('#items');

// dodaj produkty do tabeli
function addItem(item) {
  itemsContainer.innerHTML += `<tr>
          <td><button class="delete">x</button></td>
          <td>${item.title}</td>
          <td><input class="quantity" type="number" value="1"></td>
          <td>${item.price}</td>
        </tr>`;

  // const tr = document.createElement('tr');
  // const td1 = document.createElement('td');
  // const button = document.createElement('button');
  // button.innerText = 'x';
  // // button.classList = 'delete';
  // button.setAttribute('class', 'delete');
  // td1.appendChild(button);

  // const td2 = document.createElement('td');
  // td2.innerText = item.title;
  // // const cell2  = document.createTextNode(item.title);

  // const td3 = document.createElement('td');
  // const input = document.createElement('input');
  // input.setAttribute('type', 'number');
  // input.setAttribute('value', '1');
  // input.setAttribute('class', 'quantity');
  // td3.appendChild(input);

  // const td4 = document.createElement('td');
  // td4.innerText = item.price;

  // tr.appendChild(td1);
  // tr.appendChild(td2);
  // tr.appendChild(td3);
  // tr.appendChild(td4);

  // itemsContainer.appendChild(tr);
}
addItem(product1);
addItem(product2);

// usuwanie wierszy
function removeRow(e) {
  if (e.target.tagName === 'BUTTON') {
    const row = e.target.closest('tr');
    row.remove();
  }
}
function removeRowFromQuantity(e) {
  if (Number(e.target.value) === 0) {
    const row = e.target.closest('tr');
    row.remove();
  }
}

// zmień kolo tła wiersza
function markBg(e) {
  if (e.target.tagName === 'TD') {
    e.target.closest('tr').classList.toggle('marked');
  }
}

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