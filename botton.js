const changeColorButton = document.getElementById('changeColorButton');
const colorInput = document.getElementById('colorInput');
const container = document.querySelector('.container');
const colorDisplay = document.getElementById('colorDisplay');

changeColorButton.addEventListener('click', () => {
  const selectedColor = colorInput.value;
  container.style.backgroundColor = selectedColor;
  colorDisplay.textContent = `Color seleccionado: ${selectedColor}`;
});
