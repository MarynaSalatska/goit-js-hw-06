const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

userInput.addEventListener("input", (event) => {
  console.log(userOutput.textContent);
  if (!userInput.value) {
    userOutput.textContent = "Anonymous";
    return;
  }
  userOutput.textContent = userInput.value;
});

// userOutput.textContent = !userInput.value ? "Anonymous";


// userInput.addEventListener("change", (event) => {
//   console.log("Change Event");
// });
// if (!event.target.value)

