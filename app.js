// 1
// const names = ['Jan', 'Łukasz', 'Paweł', 'Łukasz', 'Jan', 'Adam'];

// const findElementCount = (array, value) => {
//   return array.filter(x => x === value).length;
// }
// const count = findElementCount(names, 'Łukasz');
// console.log(count);


// 2
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// const sortAlphabetically = (array, sort = 'asc') => {
//   array.sort();
//   if (sort === 'desc') array.reverse();
// }
// sortAlphabetically(fruits, 'desc');
// console.log(fruits);


// 3

// const courses = [
//   { title: 'PHP', price: 45 },
//   { title: 'MySQL', price: 36 },
//   { title: 'JS', price: 59 },
// ];

// // a)
// // const index = courses.findIndex(c => c.title === 'JS');
// // courses[index].price = 100;

// // b)
// // courses.find(c => c.title === 'JS').price = 100;

// // c)
// const findAndEdit = (array, findKey, findValue, editValues) => {
//   const index = courses.findIndex(c => c[findKey] === findValue);

//   Object.entries(editValues).forEach(([key, value]) => {
//     courses[index][key] = value;
//   });
// }
// findAndEdit(courses, 'title', 'JS', { price: 100, title: 'New JS' });

// console.log(courses);


// 4

// let users = [
//   { name: 'Ania', isBanned: false },
//   { name: 'Janek', isBanned: false },
//   { name: 'Kamil', isBanned: true },
//   { name: 'Michał', isBanned: true },
// ];

// // a)
// // users = users.filter(user => user.isBanned === false);

// // b)
// let index;
// do {
//   index = users.findIndex(user => user.isBanned);
//   if (index > -1) users.splice(index, 1);
// } while (index > -1);

// console.log(users);


// 5

// const numbers = [2, 0, 64, 3, 45, 12, 45];

// filter, indexOf
// const unique = numbers.filter((number, index, array) => {
//   const idx = array.indexOf(number);
//   if (idx === index) {
//     return true;
//   } else {
//     return false;
//   }
// });
// // const unique = numbers.filter((x, i, array) => array.indexOf(x) === i);
// const filterd = unique.filter(x => x >= 45);
// const text = filterd.join('-');

// console.log(text);