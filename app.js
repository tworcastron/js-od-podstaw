// Zdanie 1:
const CLASS_NAME_COLOR = 'color-btn-active';

const addColor = (e) => {
  const btn = e.target;
  btn.classList.add(CLASS_NAME_COLOR);

  setTimeout(() => {
    btn.classList.remove(CLASS_NAME_COLOR);
  }, 300);
}

const bttns = document.querySelectorAll('.color-btn');
bttns.forEach(btn => btn.addEventListener('click', addColor));


/////////////
// Zadanie 2:

// pobrac elementy
// napisać funkcje stopera
// wyświetlić aktualny czas
const btn = document.querySelector('#stopper-btn');
const timeContainer = document.querySelector('.time');
let time = 0;
let running = false;
let intervalId;

const msToSecond = ms => {
  const s = Math.floor(ms / 1000);
  const rest = ms - (s * 1000);

  return `${s}:${rest / 10}`;
}

const startStopper = () => {
  running = true;
  btn.innerText = 'Stop';

  intervalId = setInterval(() => {
    time += 10;
    timeContainer.innerText = msToSecond(time);
  }, 10);
}
const stopStopper = () => {
  running = false;
  btn.innerText = 'Start';
  clearInterval(intervalId);
}

const toggleStopper = () => running ? stopStopper() : startStopper();

btn.addEventListener('click', toggleStopper);