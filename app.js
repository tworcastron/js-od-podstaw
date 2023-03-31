// Zadanie 1:

const COOKIE_THEME_NAME = 'theme';

// pobierz przycisk
const btn = document.querySelector('#theme-button');
const body = document.querySelector('body');

// koloruj
const setTheme = newTheme => {
  if (newTheme === 'light') {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  }

  setCookie(COOKIE_THEME_NAME, newTheme, 1);
}

// ustaw kolorystykę
const clickHandler = () => {
  const theme = getCookie(COOKIE_THEME_NAME) || 'light';

  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// dodaj listener pod button
btn.addEventListener('click', clickHandler);

// sprawdź wartość w Cookie
const theme = getCookie(COOKIE_THEME_NAME) || 'light';
setTheme(theme);

// funkcje pomocnicze Cookie
function setCookie(name, value, expirationHours) {
  const date = new Date();
  date.setHours(date.getHours() + expirationHours);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];

  return cookieValue ? decodeURIComponent(cookieValue) : '';
}

/////////////////////////////////////
/////////////////////////////////////

// Zadanie 2:

const NOTES_STORAGE_NAME = 'notes';

// pobierz texarea
const textarea = document.querySelector('#editor-content');

// zapis danych do sessionStorage
const changeTextHandler = (e) => {
  const text = e.target.value;
  sessionStorage.setItem(NOTES_STORAGE_NAME, text);
}

// dodaj listener pod textarea
textarea.addEventListener('keyup', changeTextHandler);

// odczytaj dane na start
const text = sessionStorage.getItem(NOTES_STORAGE_NAME) || '';
textarea.value = text;