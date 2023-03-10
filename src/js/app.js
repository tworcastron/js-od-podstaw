const array = [1,2,3,4]
// const array = new Array(10);
// console.log(array.fill(1, 4, 8));

const users = [
  { name: 'Adam' },
  { name: 'Janek' },
  { name: 'Ola' },
]

console.log(users.map(user => user.name).join(','));