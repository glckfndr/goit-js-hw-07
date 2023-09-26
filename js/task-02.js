const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients")

for(const ingredient of ingredients){
  let li = document.createElement("li");
  li.textContent = ingredient;
  ul.append(li)
}
