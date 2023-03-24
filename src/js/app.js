const now = new Date() //?
now.getFullYear() //?
now.getDate() //?
now.getMonth() //?
// 0 - styczen
// 11 - grudzien
now.getDay() //?
// 0 - niedziela
// 1 - poniedzialek
// 6 - sobota
now.getHours() //?
now.getMinutes() //?
now.getSeconds() //?
now.getMilliseconds() //?

;`${now.getHours()} : ${now.getMinutes()}` //?

// UTC
now.getUTCHours() //?
now.getUTCDay() //?

// timestamp
// ilość milisekund od 01.01.1970
now.getTime() //?
Date.now() //?

now.toISOString() //?

// wyświetlenie
now.toLocaleDateString('pl') //?
now.toLocaleString('pl', {
  dateStyle: 'full',
  timeStyle: 'long',
}) //?

// GTM - czas uniwersalny = UTC