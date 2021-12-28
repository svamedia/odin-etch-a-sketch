// cache the DOM
// Grabs html div element and assigns it to variable
let gridContainer_div = document.querySelector(".grid-container");

// creation of new div
let grid_table = document.createElement("table");
// appends grid_table to html div element
gridContainer_div.appendChild(grid_table);
grid_table.id = "grid-table";

// create table row element
let myRow = document.createElement("tr");
grid_table.appendChild(myRow);

let rowCell = document.createElement("td");
myRow.appendChild(rowCell);
