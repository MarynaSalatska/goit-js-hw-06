const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = input.value;
fontSizeControl.addEventListener('input', event => {
  text.style.fontSize = event.currentTarget.value + 'px';
});