function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body")
const spanColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

const changeColor = (event) => {
  const getColor = getRandomHexColor();
  bodyColor.style.backgroundColor = getColor;
  spanColor.textContent = getColor;
}

btnColor.addEventListener("click", changeColor);