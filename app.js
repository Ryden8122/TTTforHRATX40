//What if we made a for loop that drew out table for us?

// Draws the giant hashtag - although that is not what it is called

/*
  Create a table div
    Create row div who targets table div
    Create 3 spans that target a row div

  append table to app
*/

function drawGrid() {
  let app = document.getElementById("app");
  
  let table = document.createElement("div");
  table.className = "table";
  
  app.append(table);
  
  for (let i = 0; i < 9; i++){
    let cellDiv = document.createElement("div");
    cellDiv.className = "cell";
    cellDiv.addEventListener("click", function(e){
      cellDiv.textContent = 'Hello Light';
      turnCounter++;
    })
    table.append(cellDiv);
  }
}

document.addEventListener("DOMContentLoaded", function(e){
  drawGrid();

  // let turnCounter = 0;
  // let playerChar = 'X' //X starts first

  // while (turnCounter > 9){
  //   if (turnCounter % 2 === 0 || turnCounter === 0){
  //     playerChar = 'X';
  //   } else {
  //     playerChar = 'O';
  //   }
  // } 
})