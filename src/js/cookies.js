// import { setCookie, getCookie, COOKIE_NAME } from './helpers/cookie.js';
import * as cookie from './helpers/cookie.js';

// console.log(Cookies.get('text'));

const d = new Date();
d.setHours(d.getHours() + 1);
const utc = d.toUTCString();

cookie.setCookie('text', encodeURIComponent(`tytuł
opis`), 1);
// deleteCookie('text');
// console.log(cookie.getCookie('text'));