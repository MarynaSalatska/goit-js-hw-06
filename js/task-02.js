const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItems = document.querySelector("#ingredients");
const arrItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  console.log(itemEl);
  return itemEl;
});
ingredientsItems.append(...arrItems);

// 2v
// const lists = document.querySelector("#ingredients");

// const item = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// lists.insertAdjacentHTML("beforeend", item);
// console.log(lists.insertAdjacentHTML("beforeend", item));
