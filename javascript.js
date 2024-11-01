const container = document.querySelector("#container");
let squareTotal = 16*16;

function createGrid() {
    for (let i = 0; i < squareTotal; i++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
}}

createGrid();