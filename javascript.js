const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");
const toggleBtn = document.querySelector("#toggle-btn");
const selectedSize = document.querySelector("input[type=range]");

const gridSize = [16, 64, 100];
const containerSize = 700;

function createGrid() {
    const gridSizePixel = gridSize[selectedSize.value - 1];
    container.innerHTML = "";
   
    const squareSize = containerSize / gridSizePixel;

    const totalSquares = gridSizePixel * gridSizePixel;
    container.style.width = `${gridSizePixel * squareSize}px`;
    container.style.height = `${gridSizePixel * squareSize}px`;

    for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.className = "pixel";
    square.className = "grid-border";
    

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);

    fillGrid(square);
    clearGrid(square);
    toggleGrid(square);
  }
}

function fillGrid(square) {
  square.addEventListener("click", () => {
    square.classList.remove("grid-border");
    square.classList.add("pixel");
  });
}


function clearGrid (square) {
    clearBtn.addEventListener("click", () => {
        square.classList.remove("pixel");
        square.classList.add("grid-border");
})}

function toggleGrid(square) {
    toggleBtn.addEventListener("click", () => {
        square.classList.toggle("grid-border");
    })
}

selectedSize.addEventListener('input', createGrid);

createGrid();