// && (AND) - i/oraz
// || (OR) - lub

const DISCOUNT = true;
const course = {
  price: 12,
  discount: {
    exists: true,
    amount: 2,
  },
};
const course2 = {
  price: 12,
};

// if (course2.discount) {
//   console.log(course2.discount.amount);
// }
// console.log(course.discount && course.discount.amount);

// console.log(DISCOUNT && course);
// console.log(DISCOUNT && false);
// console.log(false && DISCOUNT);
// console.log(DISCOUNT || course);
// console.log(DISCOUNT || false);
// console.log(false || course);

// const input = window.prompt('Podaj imię');
// const userName = input || 0;
// console.log(userName);