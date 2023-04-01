const onBuyClick = (e) => {
  e.preventDefault();

  const elements = document.querySelector("form").elements;
  const values = {
    name: elements['name'].value,
    email: elements['email'].value,
    'email-confirm': elements['email-confirm'].value,
    tel: elements['tel'].value,
    payment: elements['payment'].value,
  };
  console.log(values);
}

const buyButton = document.querySelector('#buy');
buyButton.addEventListener('click', onBuyClick);


// wyswietlenie daty zamowienia
const dateContianer = document.querySelector('#date');

const showOrderDate = (element) => {
  const d = new Date();
  element.innerHTML = d.toLocaleString();
}
showOrderDate(dateContianer);

// wyświetl podsumowanie (produty)
const itemsContainer = document.querySelector('#items-list');
const items = JSON.parse(localStorage.getItem('items')) || [];

const showProducts = (products, element) => {
  const html = products
    .map(p => `<li>${p.quantity} x "${p.title}"</li>`)
    .join('');
  element.innerHTML = html;
}
showProducts(items, itemsContainer);

// wyświetl cene całkowitą
const priceContainer = document.querySelector('#total-price');
priceContainer.innerText = localStorage.getItem('totalPrice') || 0;