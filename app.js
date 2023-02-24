const numbers = [10, 20, 30, 40, 50];
let sum = 0;
let i = 0;

while (true) {
  console.log('Dodaj ', numbers[i]);
  sum += numbers[i];

  if (sum >= 100) {
    break;
  }
  i++;
}

console.log(sum);

// -------------

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}

// continue, break