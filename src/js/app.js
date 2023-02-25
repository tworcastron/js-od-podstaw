// Nullish coalescing operator: ??

const user = {
  // points: 0,
}

// [null, undefined, '', false, 0, -0, 0n, NaN]
console.log(user.points || 'wczytywanie');

// [null, undefined]
console.log(user.points ?? 'wczytywanie');
