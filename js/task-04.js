function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.getElementById("boxes");
  const delta = 10;
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.width = `${30 + i * delta}px`;
    div.style.height = `${30 + i * delta}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function destroyBoxes() {
  const boxes = document.getElementById("boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const n = document.querySelector('input[type="number"]').value;
  createBoxes(n);
});

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
