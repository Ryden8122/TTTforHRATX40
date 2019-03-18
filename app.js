//What if we made a for loop that drew out table for us?

// Draws the giant hashtag - although that is not what it is called

/*
  Create a table div
    Create row div who targets table div
    Create 3 spans that target a row div

  append table to app
*/
function drawGrid() {
  let appendTarget = document.getElementById("app");
  let tableDiv = document.createElement("div");
  tableDiv.className = "table";
  
  for (let i = 0; i < 3; i++){
    let rowDiv = document.createElement("div");
    rowDiv.className = "row" + i;

    for (let j = 0; j < 3; j++){
      let cellSpan = document.createElement("span");
      cellSpan.className = "cell" + j;

      rowDiv.append(cellSpan);
    }
    tableDiv.append(rowDiv);
  }
  appendTarget.append(tableDiv);
}

document.addEventListener("DOMContentLoaded", function(e){
  drawGrid();
})