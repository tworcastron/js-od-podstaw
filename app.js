Object.prototype.test = 'cos tam';

const user = { name: 'Jane', age: 24 };

// for (const key in user) {
//   console.log(key);
//   if (user.hasOwnProperty(key)) {
//     console.log(user[key]);
//   }
// }

console.log(Object.values(user));
// entries, values, keys
Object
  .keys(user)
  .forEach(value => console.log(value));