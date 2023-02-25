// optional chaining ?.
const animals = [
  {
    name: 'dog',
    bark: function () { console.log('how how'); }
  },
  { name: 'cat' },
];
animals[1]?.bark?.() 
