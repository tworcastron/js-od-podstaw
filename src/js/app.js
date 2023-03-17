// const users = ['Ola', 'Janek', 'Adam'];
// const copyUsers = [...users];

// users[0] = 'Ania';

// console.log(users);
// console.log(copyUsers);

const users = [
	{ name: 'Ola', age: 30 },
	{ name: 'Janek', age: 23 },
	{ name: 'Adam', age: 25 },
];
// shallow copy, deep copy
// const copyUsers = [
//   { ...users[0] },
//   { ...users[1] },
//   { ...users[2] },
// ];
const copyUsers = JSON.parse(JSON.stringify(users));

users[0].name = 'Ania';

console.log(users);
console.log(copyUsers);