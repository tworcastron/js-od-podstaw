// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(res => console.log(res))