let counterValue = 0;
const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
function updateCounter() {
    valueSpan.textContent = counterValue;
  }
  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
  });
  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
  });