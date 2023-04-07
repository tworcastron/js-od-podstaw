// DELETE

fetch('https://jsonplaceholder.typicode.com/pos/4', {
  method: 'DELETE',
})
  .then(res => res.json())
  .then(res => console.log(res))