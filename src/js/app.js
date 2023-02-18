const elements = document.querySelector('#elements');
const pointsElement = document.querySelector('#points');
const message = document.querySelector('#message');

let points = 0;

function selectElement(e) {
  const td = e.target.closest('td');
  e.target.classList.add('show');

  if (td.dataset.points) {
    points += Number(td.dataset.points);
    pointsElement.innerText = points;
  }

  if (td.dataset.isBomb) {
    message.innerHTML = 'Koniec gry';
  }
  
  if (points >= 150) {
    message.innerHTML = 'Wygrałeś!';
  }
}

elements.addEventListener('click', selectElement);