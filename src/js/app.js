// sprawdzenie czy produkty są wciąż aktualne
// sprawdzenie czy cena jest poprawna
// złożenie zamówienia
// pobranie promocji (w podziękowaniu) do zamówienia

/*
// callback style
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
*/
// callback
const checkProductsCallback = (data, callback) => {
  // wysłanie requestu na backend
  setTimeout(() => {
    callback({ status: 'ok' });
  }, 2000);
}
checkProductsCallback({}, response => {
  console.log(response.status);
})
// promise
const checkProducts = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 'ok' });
    }, 2000);
  })
}
const checkPrice = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ status: 'ok', data })
    }, 2000);
  });
}
const makeOrder = (data) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ orderId: 123, data })
    }, 2000);
  });
}
const checkPromotionForOrder = (response) => {
  const { orderId } = response;
  console.log('Order ID', orderId);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res(['kurs HTML za 50%!'])
      rej('Błąd serwera')
    }, 2000);
  });
}

const orderData = {}; // dane zamównienia
checkProducts(orderData)
  .then(response => {
    console.log('Czy produkty dostępne:', response.status);
    return checkPrice(orderData);
  })
  .then(response => {
    console.log('Cena poprawna:', response.status);
    return makeOrder(orderData);
  })
  .then(checkPromotionForOrder)
  .then(response => {
    console.log('Promocje: ', response);
  })
  .catch(error => {
    alert(error);
  })