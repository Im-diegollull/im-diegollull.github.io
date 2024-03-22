function agregarTexto() {
  const textoInput = document.getElementById('texto-input').value;
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = textoInput;
  document.getElementById('texto-agregado').appendChild(nuevoParrafo);
}

