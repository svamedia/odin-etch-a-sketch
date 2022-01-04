// cache the DOM
// Grabs html div element and assigns it to variable
let gridContainer_div = document.querySelector(".grid-container");
// function that contains for loop to create table rows to specific value

// function that creates the main ui of the page
function loadUi() {
  //creates h1 into dom and appends to div
  let mainHeader_h1 = document.createElement("h1");
  mainHeader_h1.textContent = "Etch-A-Sketch";
  gridContainer_div.appendChild(mainHeader_h1);

  //create reset button
  let gridErase_btn = document.createElement("button");
  gridErase_btn.textContent = "Erase Grid";
  gridContainer_div.appendChild(gridErase_btn);
  gridErase_btn.addEventListener("click", function refresh() {
    location.reload();
  });
}

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

window.addEventListener("load", loadUi());
//event listener changes the background color when mouse is hovered over
window.addEventListener("load", createGrid());
