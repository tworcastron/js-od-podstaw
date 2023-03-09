// rekurencja

// const getSum = (start, ...args) => {
//   if (args.length === 0) return start;

//   return args[0] + getSum(start, ...args.slice(1));
// }

// console.log(getSum(0, 2, 2, 5));

let x = 0; // 10

const addUntill = (a, untill) => {
  if (a === untill) return a;

  return addUntill(a + 1, untill);
}

console.log(addUntill(x, 10));
