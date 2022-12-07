const txtInput = document.querySelector('.inputs input');

txtInput.addEventListener('keyup', () => {
  let filterInput = txtInput.value.replace(/[^A-Z0-9]/)

});

//https://youtu.be/dLU2wN8P6yY?t=506
