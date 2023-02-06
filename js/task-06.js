const input = document.querySelector('#validation-input');

const onInputBlur = event => {
  input.classList.remove('valid', 'invalid');
  input.value.length === Number(input.dataset.length)
    ? input.classList.add('valid')
    : input.classList.add('invalid');
};

input.addEventListener('blur', onInputBlur);
