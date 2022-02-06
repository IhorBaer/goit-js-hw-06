const formRef = document.querySelector(".login-form");
// console.log(formRef);

formRef.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("! Пожалуйста заполните все поля");
  } else {
    const formReply = { email: email.value, password: password.value };
    console.log(formReply);
    event.currentTarget.reset();
  }
}
