// tylko obecna karta, tylko aktualna sesja
sessionStorage.setItem('text', JSON.stringify({ name: 'test' }));
sessionStorage.removeItem('text');
sessionStorage.clear();
JSON.parse(sessionStorage.getItem('text'));

// cała domena, na zawsze
localStorage.setItem('username', 'Adam');
localStorage.removeItem('username');
localStorage.clear();
localStorage.getItem('username');

// 5-10MB