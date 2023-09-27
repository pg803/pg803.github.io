document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
  
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        container.appendChild(cell);
      }
    }
  });


let isMousedown = false;

  container.addEventListener('mousedown', function() {
    isMousedown = true;
  });

  container.addEventListener('mouseup', function() {
    isMousedown = false;
  });

  container.addEventListener('mouseover', function(event) {
    if (isMousedown) {
        event.target.style.backgroundColor = 'black';
    } else {
//        event.target.style.backgroundColor = 'white';
    }
  });

  