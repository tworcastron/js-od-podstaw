// definicja elmentów
const unitsContainer = document.querySelector('#units');
const leftButton = document.querySelector('#convert-to-left');
const rightButton = document.querySelector('#convert-to-right');
const calculateButton = document.querySelector('#calculate');
const directionContainer = document.querySelector('#direction');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

let unit;
let direction;

function selectUnit(e) {
  // usunięcie klasy 'marked' ze wszystkich buttonow
  const buttons = unitsContainer.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('marked');
  }

  // dodaj klasę 'marked' do aktualnego
  e.target.classList.add('marked');

  unit = e.target.dataset.unit;
}

function converToLeft(e) {
  e.target.classList.add('marked');
  rightButton.classList.remove('marked');
  directionContainer.innerText = '<-';
  direction = 'left';
}

function converToRight(e) {
  e.target.classList.add('marked');
  leftButton.classList.remove('marked');
  directionContainer.innerText = '->';
  direction = 'right';
}

function calculate() {
  // direction, unit
  let newValue;

  if (direction === 'right') {
    if (unit === 'hours') {
      newValue = input1.value * 60;
    }
    if (unit === 'kilometers') {
      newValue = input1.value * 0.62;
    }

    input2.value = newValue;
  } else {
    if (unit === 'hours') {
      newValue = input2.value / 60;
    }
    if (unit === 'kilometers') {
      newValue = input2.value * 1.6;
    }

    input1.value = newValue;
  }
}

// listenery
unitsContainer.addEventListener('click', selectUnit);
leftButton.addEventListener('click', converToLeft);
rightButton.addEventListener('click', converToRight);
calculateButton.addEventListener('click', calculate);