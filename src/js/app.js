// sort, reverse

// const array = ['Ola', 'Janek', 'Adam'];
// const array = [656, 10000, 35];
const array = [
  { title: 'JS', price: 90 },
  { title: 'PHP', price: 20 },
];

// array.sort((a, b) => a - b);
// array.sort((a, b) => {
// if (a < b) {
//   return -1;
// }
// if (a > b) {
//   return 1;
// }
// return 0;
// });
// array.reverse();

array.sort((a, b) => a.price - b.price);

console.log(array);