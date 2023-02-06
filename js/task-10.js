const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  amount = input.value;
  const newBoxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.height = 30 + i * 10 + 'px';
    newBox.style.width = newBox.style.height;
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxesArray.push(newBox);
  }
  return boxes.append(...newBoxesArray);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = '';
};

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
