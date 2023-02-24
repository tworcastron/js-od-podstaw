// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// let i = 0;

// while (sum < 100) {
//   console.log('Dodaj ', numbers[i]);
//   sum += numbers[i];
//   i++;
// }

// console.log(sum);

// ----------
const correctPassord = 'tajne1234';
let passord = 'tajne1234';

while (passord !== correctPassord) {
  passord = window.prompt('Podaj hasło:');
}

console.log(passord);