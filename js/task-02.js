const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = [];

ingredients.map((item) => {
  const makeEL = document.createElement("li");
  makeEL.classList.add("item");
  makeEL.textContent = item;
  elements.push(makeEL);
});
ingredientsEl.append(...elements);
