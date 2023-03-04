// this 

// bind - podpina kontekst .bind(this, ...)
// call - jw. + uruchamia funkcje .call(this, ...)
// apply - jw. .apply(this, [...])

const dog = {
  name: 'Spike',
  getName(longVersion) {
    if (longVersion) {
      return 'Imię to jest: ' + this.name;
    }
    return this.name;
  }
};
const cat = {
  name: 'Mruczek',
};

const dogGetName = dog.getName.bind(dog);
console.log(dogGetName());

// const catSayName = dog.getName.bind(cat, true);
// console.log(catSayName());
// console.log(dog.getName.call(cat, true));
