// cache the DOM
// Grabs html div element and assigns it to variable
let gridContainer_div = document.querySelector(".grid-container");
// function that contains for loop to create table rows to specific value

function createGrid() {
  // creation of new div
  let grid_table = document.createElement("table");

  // appends grid_table to html div element
  gridContainer_div.appendChild(grid_table);
  grid_table.id = "grid-table";

  for (let i = 0; i < 17; i++) {
    // create table row element
    let myRow = document.createElement("tr");
    myRow.id = "row" + i;

    grid_table.appendChild(myRow);

    for (let j = 0; j < 17; j++) {
      let rowCell = document.createElement("td");
      myRow.appendChild(rowCell);
      rowCell.classList.add("table-cell");
      // nested function that adds the css styles via dom manipulation and css
      rowCell.onmouseover = function changeCellColor() {
        rowCell.style.backgroundColor = "red";
      };
    }
  }
}

//event listener changes the background color when mouse is hovered over
window.addEventListener("load", createGrid());
