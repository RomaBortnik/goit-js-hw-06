const input = document.querySelector('#name-input');
const label = document.querySelector('#name-output');

const onInputChange = event => (label.textContent = event.currentTarget.value);

input.addEventListener('input', onInputChange);
