// 1)
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 2)
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum += i;
// }
// console.log('Suma od 1 do 100 = ', sum);

// 3)
// const text = window.prompt('Wpisz dowolne słowo:')
// let newText = '';

// for (let i = text.length - 1; i >= 0; i--) {
//   newText += text[i];
// }
// console.log(newText);

// 4)
// let x = 0;

// while (true) {
//   if (x % 13 === 0) {
//     if (x > 40) {
//       break;
//     }
//   }
//   x++;
// }
// console.log(x);

// 5)
// const user = { name: 'Jane', age: 24 };

// for (const key in user) {
//   console.log(`Pole "${key}" = ${user[key]}`);
// }

// Object.entries(user).forEach(entry => {
//   console.log(`Pole "${entry[0]}" = ${entry[1]}`);
// })