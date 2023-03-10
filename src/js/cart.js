// IIFE
(function () {
  const cart = {
    price: 0,
    getPrice(cb) {
      this.price = cb(this.items, this.getDiscountIfEnabled());
      if (this.price < 0) this.price = 0;

      return this.price;
    },
    getDiscount() {
      return this.discount.amount;
    },
    getDiscountIfEnabled() {
      if (this.discount.enabled) {
        return this.getDiscount();
      } else {
        return 0;
      }
    },
    removeCourse(id) {
      console.log(id);
      const index = this.items.findIndex(item => item.id === id);
      this.items.splice(index, 1);
    },
    discount: {
      amount: 10,
      enabled: false,
    },
    items: [
      { id: 1, price: 10, title: 'JS od podstaw' },
      { id: 2, price: 20, title: 'PHP od podstaw' },
    ],
  }
  
  // definicja elementow
  const discountElement = document.querySelector('#discount');
  const discountCheckbox = document.querySelector('#add-discount');
  const itemsContainer = document.querySelector('#items');
  
  for (const item of cart.items) {
    addItem(item);
  }
  
  // dodaj produkty do tabeli
  function addItem(item) {
    itemsContainer.innerHTML += `<tr data-course-id="${item.id}">
            <td><button class="delete">x</button></td>
            <td>${item.title}</td>
            <td><input class="quantity" type="number" value="1"></td>
            <td>${item.price}</td>
          </tr>`;
  }
  
  // usuwanie wierszy
  const removeRow = (e) => {
    if (e.target.tagName === 'BUTTON') {
      const row = e.target.closest('tr');
      cart.removeCourse(Number(row.dataset.courseId));
      row.remove();
      calculatePrice();
    }
  }
  const removeRowFromQuantity = (e) => {
    if (Number(e.target.value) === 0) {
      const row = e.target.closest('tr');
      cart.removeCourse(Number(row.dataset.courseId));
      row.remove();
      calculatePrice();
    }
  }
  
  // zmień kolo tła wiersza
  const markBg = (e) => {
    if (e.target.tagName === 'TD') {
      e.target.closest('tr').classList.toggle('marked');
    }
  }
  
  // dodaj zniżke
  const addDiscount = function(e) {
    this.discount.enabled = e.target.checked;
    if (this.getDiscount() > 0) {
      document
        .querySelector('#discount-amount')
        .innerHTML = -this.getDiscount();
      discountElement.classList.toggle('hidden');
    }
    calculatePrice();
  }

  // 2 sposoby liczenia ceny
  const getPriceRegularClient = (items, discount) => {
    const price = items.reduce((acc, item) => acc + item.price, -discount);
    return price;
  }
  const getPriceSuperClient = (items, discount) => {
    let price = items.reduce((acc, item) => acc + item.price, 0);
    price -= discount;
    return price;
  }
  
  // cena całkowita
  const calculatePrice = () => {
    const superClient = false;
    let cb = getPriceRegularClient;
    if (superClient) cb = getPriceSuperClient;

    let total = cart.getPrice(cb);
    document.querySelector('#total-price').innerHTML = total;
  }
  calculatePrice();
  
  // listenery
  discountCheckbox.addEventListener('click', addDiscount.bind(cart));
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
})();