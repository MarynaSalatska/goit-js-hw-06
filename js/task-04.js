const value = document.querySelector("#value");
const btnMin = document.querySelector('[data-action="decrement"]');
const btnPl = document.querySelector('[data-action="increment"]');

value.addEventListener("click", onClick);
btnPl.addEventListener("click", onClick);
btnMin.addEventListener("click", offClick);

let counterValue = 0;

function onClick(evt) {
  counterValue += 1;
  value.textContent = counterValue;
}

function offClick(evt) {
  counterValue -= 1;
  value.textContent = counterValue;
}

