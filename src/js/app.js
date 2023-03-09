// callback

// asynchroniczna
// const prepareMeal = (callback) => {
//   setTimeout(() => {
//     console.log('zbieranie składniów');
//     console.log('przygotowywanie');
//     callback();
//   }, 2000);
// }
// const notify = () => {
//   console.log('Danie gotowe!');
// }

// prepareMeal(notify);


const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const doSmthWithNumber = (x, y, callback) => {
  console.log(callback(x, y));
}

doSmthWithNumber(2, 5, add);
doSmthWithNumber(2, 5, sub);


// const callback = (a) => {
//   return this.price += item.price;
// }
// this.items.forEach(callback);