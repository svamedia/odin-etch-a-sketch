// cache the DOM
// Grabs html div element and assigns it to variable
var gridContainer_div = document.querySelector(".grid-container");
// creation of new div
var gridCell = document.createElement("div");
// appends gridCell to html div element
gridContainer_div.appendChild(gridCell);
// adds .grid-cell class to newly created div
gridCell.classList.add("grid-cell");
