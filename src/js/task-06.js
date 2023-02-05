const input = document.querySelector('#validation-input');

input.classList.remove('valid', 'invalid');

const onInputBlur = event =>
  input.value.length === Number(input.dataset.length)
    ? input.classList.add('valid')
    : input.classList.add('invalid');

input.addEventListener('blur', onInputBlur);
