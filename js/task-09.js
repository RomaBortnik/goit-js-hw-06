const button = document.querySelector('.change-color');
const label = document.querySelector('.color');

const onChangeBodyBackground = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  label.textContent = randomColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', onChangeBodyBackground);
