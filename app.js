const input = document.querySelector('input');

const validateZipCode = value => {
  // validacja
  if (!value) {
    return 'Kod pocztowy jest wymagany';
  }

  const regExp = new RegExp('^[0-9]{2}-[0-9]{3}$');
  if (!regExp.test(value)) {
    return 'Kod pocztowy jest niepoprawny';
  }

  return '';
}

const setInputError = (error, input, errorContainer) => {
  // dodanie błędu
  errorContainer.innerHTML = error;

  // dodanie klasy do inputa
  if (error) {
    input.classList.add('wrong');
    input.classList.remove('ok');
  } else {
    input.classList.add('ok');
    input.classList.remove('wrong');
  }
}

const validate = (e) => {
  const error = validateZipCode(e.target.value);
  setInputError(error, input, document.querySelector('#error'));
}

input.addEventListener('keyup', validate);
input.addEventListener('blur', validate);