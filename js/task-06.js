const userNameInput = document.querySelector("#validation-input");
const maxLength = Number(userNameInput.getAttribute("data-length"));

userNameInput.addEventListener("blur", (event) => {
  if (event.target.value.length === maxLength) {
    userNameInput.classList.remove("invalid");
    userNameInput.classList.add("valid");
  } else {
    userNameInput.classList.remove("valid");
    userNameInput.classList.add("invalid");
  }
});

