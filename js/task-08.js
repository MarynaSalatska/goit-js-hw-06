const loginForm = document.querySelector(".login-form");

const handleClick = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    return alert("Fill the fields");
  }
  console.log({ email: email, password: password });
  event.currentTarget.reset();
};

loginForm.addEventListener("submit", handleClick);
