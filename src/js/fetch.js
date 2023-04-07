// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(res => console.log(res))
  
// POST
const post1 = {
  title: 'Nowy post',
  body: 'treść nowego posta',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(post1),
})
  .then(res => res.json())
  .then(res => console.log(res))
  
// PUT
const post2 = {
  title: 'Nowy post',
  body: 'treść nowego posta',
};

fetch('https://jsonplaceholder.typicode.com/posts/4', {
  method: 'put',
  body: JSON.stringify(post2),
})
  .then(res => res.json())
  .then(res => console.log(res))
  
// PATCH
const post3 = {
  title: 'Nowy post',
};

fetch('https://jsonplaceholder.typicode.com/posts/4', {
  method: 'PATCH',
  body: JSON.stringify(post3),
})
  .then(res => res.json())
  .then(res => console.log(res))
  
// DELETE
fetch('https://jsonplaceholder.typicode.com/posts/4', {
  method: 'DELETE',
})
  .then(res => res.json())
  .then(res => console.log(res))
  
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