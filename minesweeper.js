document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = 
 {cells:[{row: 0, col: 0, isMine:true,isMarked: false, hidden: false},
  {row: 0, col: 1, isMine:true,isMarked: false, hidden: true},
  {row: 0, col: 2, isMine:true,isMarked: false, hidden: true},
  {row: 1, col: 0, isMine:true,isMarked: false, hidden: true},  ],};

function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener("click",checkForWin)
  document.addEventListener("contextmenu",checkForWin)
  for(let i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let a = 0
    for(let i = 0; i < board.cells.length; i++){
      if(board.cells[i].isMine == true && board.cells[i].isMarked == true){
        a += 1
      }
    }
    if(a == 4){
      displayMessage('You win!')
    }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     //lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let count = 0;
  var surrounding = getSurroundingCells(cell.row, cell.col)
  for(let i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine){
      count += 1
    }
  }
  return count
}

console.log(countSurroundingMines(board.cells[0]))