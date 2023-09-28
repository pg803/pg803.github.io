document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let cell = document.createElement("div");
      cell.className = "grid-item";
      container.appendChild(cell);
    }
  }
});

let erase = false;
let selectedColor = "black";

let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function (e) {
  selectedColor = e.target.value;
});

function changeValue() {
  if (erase == false) {
    erase = true;
  } else if (erase == true) {
    erase = false;
  }
}

let isMousedown = false;

container.addEventListener("mousedown", function () {
  isMousedown = true;
});

container.addEventListener("mouseup", function () {
  isMousedown = false;
});

container.addEventListener("mouseover", function (event) {
  if (isMousedown && erase == false) {
    event.target.style.backgroundColor = selectedColor;
  } else if (isMousedown && erase == true) {
    event.target.style.backgroundColor = "white";
  }
});
