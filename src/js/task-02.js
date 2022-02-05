const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientRef = ingredients.forEach(() => {
  const itemRef = document.createElement("li");
  (ingredient) => ingredient + "";
  itemRef.textContent = ingredients;
  itemRef.classList.add("item");
  console.log(itemRef);
});
