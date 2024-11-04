const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");
const toggleBtn = document.querySelector("#toggle-btn");
const selectedSize = document.querySelector("input[type=range]");

const gridSize = [16, 64, 100];
const containerSize = 700;

/**
 * Creates a grid of squares inside the container element.
 * The grid size is determined by the selected size from the range input.
 * Each square is given event listeners for filling, clearing, and toggling grid borders.
 */
function createGrid() {
  // Determine the number of squares per side based on selected size
  const gridSizePixel = gridSize[selectedSize.value - 1];
  container.innerHTML = ""; // Clear existing grid

  // Calculate the size of each square
  const squareSize = containerSize / gridSizePixel;

  // Calculate total number of squares
  const totalSquares = gridSizePixel * gridSizePixel;
  container.style.width = `${gridSizePixel * squareSize}px`;
  container.style.height = `${gridSizePixel * squareSize}px`;

  // Create squares and append to the container
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.className = "pixel";
    square.className = "grid-border";

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);

    // Add event listeners for square interactions
    fillSquare(square);
    clearGrid(square);
    toggleGrid(square);
  }
}

function fillSquare(square) {
  square.addEventListener("click", () => {
    square.classList.remove("grid-border");
    square.classList.add("pixel");
  });
}

function clearGrid(square) {
  clearBtn.addEventListener("click", () => {
    square.classList.remove("pixel");
    square.classList.add("grid-border");
  });
}

function toggleGrid(square) {
  toggleBtn.addEventListener("click", () => {
    if (square.classList.contains("pixel")) return;
    square.classList.toggle("grid-border");
  });
}

selectedSize.addEventListener("input", createGrid);

createGrid();