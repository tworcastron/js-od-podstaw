const d = new Date();
d.setHours(d.getHours() + 1);
const utc = d.toUTCString();

document.cookie = 'username=Adam; expires=' + utc;

// UTC:
// Dzień tygodnia, DD Miesiąc RRRR GG:MM:SS GMT

// console.log(document.cookie.split('; '));

// 4096 bajtów (4 kilobajty)