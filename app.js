// cache the DOM
// Grabs html div element and assigns it to variable
let gridContainer_div = document.querySelector(".grid-container");

// variables for color button
let colorPicker_input = document.getElementById("color");
let randomRgb_input = document.getElementById("randomRgb");

// functions to color the rowss
let regular_coloring = function () {
  this.style.backgroundColor = document.getElementById("color").value;
};
let random_coloring = function () {
  this.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
};

// set current grid function
let currentFunction = regular_coloring;

// function that contains for loop to create table rows to specific value
function createGrid() {
  // creation of new div
  let grid_table = document.createElement("table");
  let heights = document.getElementById("inputHeight").value;
  let widths = document.getElementById("inputWidth").value;
  let canvas = document.getElementById("pixel-canvas");

  if (canvas.firstChild) canvas.removeChild(canvas.firstChild);

  // appends grid_table to html div element
  canvas.appendChild(grid_table);
  grid_table.id = "grid-table";

  currentFunction = regular_coloring;

  for (let i = 0; i < heights; i++) {
    if (i > 100) break;
    // create table row element
    let myRow = document.createElement("tr");
    myRow.id = "row" + i;

    grid_table.appendChild(myRow);

    for (let j = 0; j < widths; j++) {
      if (j > 100) break;
      let rowCell = document.createElement("td");
      myRow.appendChild(rowCell);
      rowCell.classList.add("table-cell");
      rowCell.addEventListener("mouseover", currentFunction);
    }
  }

  // eL for regular color picker
  colorPicker_input.addEventListener("click", () => {
    rowCell = document.querySelectorAll(".table-cell");
    for (var i = 0; i < rowCell.length; i++) {
      rowCell[i].removeEventListener("mouseover", random_coloring);
      rowCell[i].addEventListener("mouseover", regular_coloring);
    }
    currentFunction = regular_coloring;
  });

  //event listeners for random color
  randomRgb_input.addEventListener("click", () => {
    rowCell = document.querySelectorAll(".table-cell");
    for (var i = 0; i < rowCell.length; i++) {
      rowCell[i].removeEventListener("mouseover", currentFunction);
      rowCell[i].addEventListener("mouseover", random_coloring);
    }
    currentFunction = random_coloring;
  });
}
