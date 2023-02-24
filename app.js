// for...in (tablicach, tekstach, obiektach)
// - leci po indeksach/kluczach
// - enumerable

// for...of (tablicach, tekstach)
// - leci po wartościach
// - iterable

// enumerable - policzalny
// iterować - powtarzać w pętli

const user = { name: 'Jane', age: 20 };
const animals = ['dog', 'cat', 'mouse'];
const text = 'to jest tekst';

// user.lastName = 'Kowalski'
// Object.defineProperty(user, 'lastName', {
//   value: 'Kowalski',
//   enumerable: false,
// });
// console.log(user.lastName);

// for (const key in user) {
//   console.log(key, user[key]);
// }
// for (const value of user) {
//   console.log(value);
// }
// for (const key in animals) {
//   console.log(key, animals[key]);
// }
// for (const value of animals) {
//   console.log(value);
// }

// console.log(animals[Symbol.iterator]);
// console.log(user[Symbol.iterator]);

// console.log(user.propertyIsEnumerable('lastName'));
// console.log(Object.getOwnPropertyDescriptor(user, 'lastName'));