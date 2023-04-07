// DELETE (błąd)

fetch('https://jsonplaceholder.typicode.com/pos/4', {
  method: 'DELETE',
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Dane nie mogły zostać usunięte!');
    }
    return res.json()
  })
  .then(res => console.log(res))
  .catch(error => {
    console.log('Błąd: ', error.message);
  });