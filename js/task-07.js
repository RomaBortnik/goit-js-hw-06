const input = document.querySelector('#font-size-control');
const label = document.querySelector('#text');

const onInputChange = event =>
  (label.style.fontSize = `${event.currentTarget.value}px`);

input.addEventListener('input', onInputChange);
