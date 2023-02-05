const button = document.querySelector('.change-color');
const label = document.querySelector('.color');

const onChangeBodyBackground = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  label.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', onChangeBodyBackground);
