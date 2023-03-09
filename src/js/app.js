// spread operator ...

const getSum = (start, ...args) => {
  let sum = start;
  args.forEach(a => sum += a);
  console.log(args, sum);
}

getSum(-4, 2, 2);
