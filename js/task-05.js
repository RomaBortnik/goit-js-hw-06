const input = document.querySelector('#name-input');
const label = document.querySelector('#name-output');

const onInputChange = event =>
  event.currentTarget.value === ''
    ? (label.textContent = 'Anonymous')
    : (label.textContent = event.currentTarget.value);

input.addEventListener('input', onInputChange);
