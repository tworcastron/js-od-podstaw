{
  const addToCart = () => {
    items.add(item);
  }

  const addToCartHandler = () => {
    //..
    try {
      // addToCart();
      throw new RangeError('błąd');
      console.log('po throw');
    } catch (error) {
      if (error instanceof RangeError) {
        console.log('to jest range error');
      } else {
        console.log('to jest error');
      }
      // console.log('Coś poszło nie tak!', error);
    }
    //..
    console.log('odświeżenie widoku');
  }

  addToCartHandler();
}


try {
  const arr = new Array(1000000000000);
} catch (error) {
  if (error instanceof RangeError) {
    console.error("Błąd zakresu:", error.message);
  }
}