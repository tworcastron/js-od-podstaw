// // 1

// const user = {
//   name: 'Jon',
//   lastName: 'Snow',
// };
// const say = function() {
//   console.log(`You know nothig ${this.name} ${this.lastName}`);
// }
// // say.call(user);
// const sayUser = say.bind(user);
// sayUser();


// // 2

// const address = { city: 'Lublin', street: 'Lekka' };
// const cb1 = (city, street) => {
//   return `Mieszkasz w mieście "${city}" na ulicy "${street}"`
// }
// const cb2 = (city, street) => {
//   return `Miasto: ${city}, ulica: ${street}`
// }
// const showAddress = (address, cb) => {
//   console.log(cb(address.city, address.street));
// }

// showAddress(address, cb1);
// showAddress(address, cb2);


// // 3

// const say = (text) => {
//   return (name) => {
//     console.log(`${text} ${name}!`);
//   }
// }

// const sayHi = say('Hi')
// const sayHello = say('Hello')

// sayHi('Janek') // 'Hi Janek!'
// sayHello('Janek') // 'Hello Janek!'


// // 4

// const exp = (x, n) => {
//   if (n === 0) return 1;

//   return x * exp(x, n - 1);
// }

// console.log(exp(2, 2));
// console.log(exp(2, 3));