let counterValue = 0;

const counterRef = document.querySelector("#counter");
const decrementBtnRef = counterRef.querySelector('[data-action = "decrement"]');
const incrementBtnRef = counterRef.querySelector('[data-action = "increment"]');
const counterValueRef = counterRef.querySelector("#value");

const handleClickDecr = () => {
  return (counterValueRef.textContent = counterValue -= 1);
};
const handleClickIncr = () => {
  return (counterValueRef.textContent = counterValue += 1);
};

decrementBtnRef.addEventListener("click", handleClickDecr);
incrementBtnRef.addEventListener("click", handleClickIncr);
