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

function fillGrid(e) {
    e.addEventListener("click", () => {
        e.style.backgroundColor = "black";
        e.style.border = "0";
    })
}

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.removeAttribute("style");
    })
}

clearBtn.addEventListener("click", () => {
    clearGrid();
})

createGrid();