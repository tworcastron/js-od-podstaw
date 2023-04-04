// sprawdzenie czy produkty są wciąż aktualne
// sprawdzenie czy cena jest poprawna
// złożenie zamówienia
// pobranie promocji (w podziękowaniu) do zamówienia

const checkProducts = (data, callback) => {
  // wysłanie requestu na backend
  setTimeout(() => {
    callback({ status: 'ok' });
  }, 2000);
}
const checkPrice = (data, callback) => {
  setTimeout(() => {
    callback({ status: 'ok', data })
  }, 2000);
}
const makeOrder = (data, callback) => {
  setTimeout(() => {
    callback({ orderId: 123, data })
  }, 2000);
}
const checkPromotionForOrder = (orderId, callback) => {
  setTimeout(() => {
    callback(['kurs HTML za 50%!'])
  }, 2000);
}

// callback hell (kod wygląda jak choinka...)
const orderData = {}; // dane zamówienia
checkProducts(orderData, (response) => {
  const { status } = response;
  console.log('Czy produkty dostępne: ', status);

  checkPrice(orderData, (response2) => {
    const { status, data } = response2;
    console.log('Cena poprawna: ', status);

    makeOrder(orderData, (response3) => {
      const { orderId, data } = response3;
      console.log('Order ID', orderId);

      checkPromotionForOrder(orderId, (response4) => {
        const promo = response4;
        console.log('Promocje: ', promo);
      });
    });
  });
});