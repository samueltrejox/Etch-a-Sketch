const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");
let squareTotal = 16*16;

function createGrid() {
    for (let i = 0; i < squareTotal; i++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);

    fillGrid(square);
}}

function fillGrid(square) {
    square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
        square.style.border = "0";
    })
}

function clearGrid() {
    document.querySelectorAll(".square").forEach(square => square.style = "");
}

clearBtn.addEventListener("click", clearGrid);

createGrid();