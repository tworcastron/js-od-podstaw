// const array = [
//   { id: 1, price: 30, title: 'JS od podstaw', available: true, },
//   { id: 2, price: 20, title: 'PHP od podstaw', available: false },
// ];
const array = [1,3,4,5,6];

// const filtered = array.filter(value => value.available);
const filtered = array.filter(value => value > 4);

console.log(filtered);