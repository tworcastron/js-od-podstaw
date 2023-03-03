// zasięg globalny/funkcja - this = window/global
// jeśli funkcja w obiekcie (ale nie strzałkowa) - this = obiekt

// ...ale może być być ustawiony "ręcznie"

// this 

const cart = {
  price: 12,
  // showPrice() {
  //   const someFunc = () => {
  //     console.log(this.price);
  //   }
  //   someFunc();
  // },
  showPrice() {
    const totalPrice = this.price - this.discount.amount;
    console.log(totalPrice);
  },
  discount: {
    amount: 10,
    getDiscount: function() {
      console.log(this.amount);
    }
  },
}

//...
cart.showPrice();