function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const divs = [];
  
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }
  
  boxesContainer.append(...divs);
}
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('#controls input').value, 10);
  if (amount > 0) {
    createBoxes(amount);
  } else {
    alert('Please enter a number greater than 0');
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});