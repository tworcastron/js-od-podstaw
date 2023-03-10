// najpopularniejsze pętle na tablicach:

// [1,2,3].forEach((x) => console.log(x));
const x = ['1','2','3'].reduce((acc, current) => acc + current, '');

console.log(x);