const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const incrementFunction = event => {
  counterValue += 1;
  value.textContent = counterValue;
  return value.textContent;
};

const decrementFunction = event => {
  counterValue -= 1;
  value.textContent = counterValue;
  return value.textContent;
};

decrBtn.addEventListener('click', decrementFunction);
incrBtn.addEventListener('click', incrementFunction);
