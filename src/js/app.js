// find, findIndex

const users = [
  { id: 1, name: 'Adam' },
  { id: 2, name: 'Janek' },
  { id: 3, name: 'Ola' },
];
// const element = users.find(x => x.name === 'Ola');
// const index = users.findIndex(x => x.name === 'Ola');

console.log(users[users.length - 1]);
console.log(users.at(-1));
// console.log(users.pop()); // UWAGA! usuwa element z tablicy
console.log([2,4,7].includes(1));