const gridSize = [16, 32, 64];
const containerSize = 700;
const defaultMode = "retro";

let currentMode = defaultMode;

function setMode(selectedMode) {
  activeButton(selectedMode);
  currentMode = selectedMode;
}

document.querySelector("#retro-btn").addEventListener("click", () => setMode("retro"));
document.querySelector("#random-btn").addEventListener("click", () => setMode("random"));
document.querySelector("#clear-btn").addEventListener("click", clearGrid);
document.querySelector("#shadow-btn").addEventListener("click", () => setMode("shadow"));

const container = document.querySelector("#container");
const selectedSize = document.querySelector("input[type=range]");
const randomBtn = document.querySelector("#random-btn");
const retroBtn = document.querySelector("#retro-btn");
const shadowBtn = document.querySelector("#shadow-btn");
const toggleBtn = document.querySelector("#toggle-btn");

function createGrid() {
  const gridSizePixel = gridSize[selectedSize.value - 1];
  container.innerHTML = "";

  // Calculate the size of each square
  const squareSize = containerSize / gridSizePixel;

  // Calculate total number of squares
  const totalSquares = gridSizePixel * gridSizePixel;
  container.style.width = `${gridSizePixel * squareSize}px`;
  container.style.height = `${gridSizePixel * squareSize}px`;

  // Create squares
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.addEventListener("click", colorSquare);
    container.appendChild(square);
    square.className = "grid-border";

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    fillSquare(square);
  }
}

function fillSquare(square) {
  square.addEventListener("click", () => {
    square.classList.remove("grid-border");
    square.classList.add("pixel");
  });
}

function clearGrid() {
  const squares = container.querySelectorAll(".pixel");
  squares.forEach(square => {
    square.classList.remove("pixel");
    if(toggleBtn.classList.contains("active")) {
      square.classList.remove("grid-border");
    } else {
      square.classList.add("grid-border");
    }
      square.style.backgroundColor = ""; // Reset color
    square.style.opacity = "";
  });
}

function toggleGrid() {
  document.querySelector("#toggle-btn").addEventListener("click", () => {
    toggleBtn.classList.toggle('active');
    const squares = container.querySelectorAll("div");
    squares.forEach(square => {
      if (!square.classList.contains("pixel")) {
        square.classList.toggle("grid-border");
      }
    });
  });
  
}

function getRandomHexColor() {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex.padStart(6, '0')}`;
}

function shadowSquare(square) {
  let opacity = parseFloat(square.style.opacity) || 0;
  opacity = Math.min(opacity + 0.1, 1);
  square.style.opacity = opacity.toString();
}

function colorSquare(event) {
  const square = event.target;
  switch (currentMode) {
    case "random":
      square.style.backgroundColor = getRandomHexColor();
      square.classList.remove("grid-border");
      break;
    case "retro":
      fillSquare(square);
      break;
    case "shadow":
      shadowSquare(square);
      break;
    default:
  }
}

function activeButton(selectedMode) {
  const buttons = [randomBtn, retroBtn, shadowBtn];
  buttons.forEach(button => button.classList.remove('active'));
  buttons.find(button => button.id === `${selectedMode}-btn`).classList.add('active');
}

selectedSize.addEventListener("input", createGrid);

clearGrid();
toggleGrid();
activeButton(defaultMode);
createGrid();
