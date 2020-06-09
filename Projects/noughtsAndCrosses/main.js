const delayInMilliseconds = 1000; //1 second
let canPlayerGo = true
let boardPositions = []
let cross = true
const table = document.querySelector('.grid')
table.addEventListener('click', mainFunc)
function mainFunc(e) {
    event.preventDefault()
    const cell = e.target
    const lastPlayerPosition = (Array.from(cell.parentNode.children).indexOf(cell)+1)
    if (cell.innerHTML != "") { return }

    if (cross == true) { cell.innerHTML += '<i class="fas fa-times"></i>'; cross = false; isGameOver(lastPlayerPosition); return }
    cell.innerHTML += '<i class="fas fa-circle"></i>'
    cross = true
    isGameOver(lastPlayerPosition)
}
function isGameOver(playerPositon) {
    boardPositions.push(playerPositon)
    const boardPositionCross = [] 
    const boardPositionCircle = []
    for (i=0;i < boardPositions.length;i++) { 
        if (i % 2 == 0 ) {
            boardPositionCross.push(boardPositions[i])
        } else {
            boardPositionCircle.push(boardPositions[i])
        }
    }
    if (boardPositionCross.includes(1) && boardPositionCross.includes(2) && boardPositionCross.includes(3)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(1) && boardPositionCross.includes(4) && boardPositionCross.includes(7)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(1) && boardPositionCross.includes(5) && boardPositionCross.includes(9)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(2) && boardPositionCross.includes(5) && boardPositionCross.includes(8)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(3) && boardPositionCross.includes(5) && boardPositionCross.includes(7)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(3) && boardPositionCross.includes(6) && boardPositionCross.includes(9)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(7) && boardPositionCross.includes(8) && boardPositionCross.includes(9)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(4) && boardPositionCross.includes(5) && boardPositionCross.includes(6)) {
        alert("Cross Won");resetEverything()
    } else if (boardPositionCross.includes(1) && boardPositionCross.includes(4) && boardPositionCross.includes(7)) {
        alert("Cross Won");resetEverything()
    }
    if (boardPositionCircle.includes(1) && boardPositionCircle.includes(2) && boardPositionCircle.includes(3)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(1) && boardPositionCircle.includes(4) && boardPositionCircle.includes(7)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(1) && boardPositionCircle.includes(5) && boardPositionCircle.includes(9)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(2) && boardPositionCircle.includes(5) && boardPositionCircle.includes(8)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(3) && boardPositionCircle.includes(5) && boardPositionCircle.includes(7)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(3) && boardPositionCircle.includes(6) && boardPositionCircle.includes(9)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(7) && boardPositionCircle.includes(8) && boardPositionCircle.includes(9)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(4) && boardPositionCircle.includes(5) && boardPositionCircle.includes(6)) {
        alert("Circle Won");resetEverything()
    } else if (boardPositionCircle.includes(1) && boardPositionCircle.includes(4) && boardPositionCircle.includes(7)) {
        alert("Circle Won");resetEverything()
    }
    console.log(boardPositions.length)
    if (boardPositions.length == 9) {
        alert("Tie")
        resetEverything()
    }
}
function resetEverything() {
    for (i=0;i<Array.from(table.children).length;i++) {
        table.children[i].innerHTML = ""
    }
    canPlayerGo = true
    boardPositions = []
    cross = true
}








// //Variables
// const delayInMilliseconds = 1000; //1 second
// let canPlayerGo = true
// let boardPositions = []
// let cross = true

// //Selectors
// const table = document.querySelector('.grid')

// //Event Listeners
// table.addEventListener('click', mainFunc)

// //Functions


// function mainFunc(e) {
//     //if (canPlayerGo === false) { return }
    
//     event.preventDefault()
//     const cell = e.target
//     const lastPlayerPosition = (Array.from(cell.parentNode.children).indexOf(cell)+1)
//     if (cell.innerHTML != "") { return }

//     //player turns 
//     if (cross == true) { cell.innerHTML += '<i class="fas fa-times"></i>'; cross = false; isGameOver(lastPlayerPosition); return }
//     cell.innerHTML += '<i class="fas fa-circle"></i>'
//     cross = true
//     isGameOver(lastPlayerPosition)

//     // canPlayerGo = false


    
//     //computer turn
//     // setTimeout(function() {
//     //     let computerNumber = decidingComputerSquare(lastPlayerPosition)
//     //     convertNumber(computerNumber, true)
//     //     document.querySelector(convertNumber(computerNumber, true)).innerHTML = '<i class="fas fa-circle"></i>'
//     //     canPlayerGo = true
//     // }, delayInMilliseconds);  
 
// }
 
// function isGameOver(playerPositon) {
//     boardPositions.push(playerPositon)
//     const boardPositionCross = [] 
//     const boardPositionCircle = []
//     for (i=0;i < boardPositions.length;i++) { 
//         if (i % 2 == 0 ) {
//             boardPositionCross.push(boardPositions[i])
//         } else {
//             boardPositionCircle.push(boardPositions[i])
//         }
//     }

//     console.log(boardPositionCross)
//     console.log(boardPositionCross.includes(1))
//     console.log(boardPositionCircle)

//     if (boardPositionCross.includes(1) && boardPositionCross.includes(2) && boardPositionCross.includes(3)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(1) && boardPositionCross.includes(4) && boardPositionCross.includes(7)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(1) && boardPositionCross.includes(5) && boardPositionCross.includes(9)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(2) && boardPositionCross.includes(5) && boardPositionCross.includes(8)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(3) && boardPositionCross.includes(5) && boardPositionCross.includes(7)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(3) && boardPositionCross.includes(6) && boardPositionCross.includes(9)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(7) && boardPositionCross.includes(8) && boardPositionCross.includes(9)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(4) && boardPositionCross.includes(5) && boardPositionCross.includes(6)) {
//         alert("Cross Won");resetEverything()
//     } else if (boardPositionCross.includes(1) && boardPositionCross.includes(4) && boardPositionCross.includes(7)) {
//         alert("Cross Won");resetEverything()
//     }

//     if (boardPositionCircle.includes(1) && boardPositionCircle.includes(2) && boardPositionCircle.includes(3)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(1) && boardPositionCircle.includes(4) && boardPositionCircle.includes(7)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(1) && boardPositionCircle.includes(5) && boardPositionCircle.includes(9)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(2) && boardPositionCircle.includes(5) && boardPositionCircle.includes(8)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(3) && boardPositionCircle.includes(5) && boardPositionCircle.includes(7)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(3) && boardPositionCircle.includes(6) && boardPositionCircle.includes(9)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(7) && boardPositionCircle.includes(8) && boardPositionCircle.includes(9)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(4) && boardPositionCircle.includes(5) && boardPositionCircle.includes(6)) {
//         alert("Circle Won");resetEverything()
//     } else if (boardPositionCircle.includes(1) && boardPositionCircle.includes(4) && boardPositionCircle.includes(7)) {
//         alert("Circle Won");resetEverything()
//     }
//     console.log(boardPositions.length)
//     if (boardPositions.length == 9) {
//         alert("Tie")
//         resetEverything()
//     }

// }

// function resetEverything() {
//     for (i=0;i<Array.from(table.children).length;i++) {
//         table.children[i].innerHTML = ""
//     }
//     canPlayerGo = true
//     boardPositions = []
//     cross = true
// }

// function decidingComputerSquare(playerPositon) {

//     boardPositions.push(playerPositon)

//     if (boardPositions.length == 1 ) {
//         return (boardPositions [0] == 5) ? 7 : 5
//     } else if (boardPositions.length == 2) {
//         // if (boardPositions == [7,(1 or 3 or 5)] ) {  } 
//     }

//     return playerPositon + 1
// }

// function convertNumber(input, htmlClass) {
//     var numberConversion = {
//         "one": "1",
//         "two": "2",
//         "three": "3",
//         "four": "4",
//         "five": "5",
//         "six": "6",
//         "seven": "7",
//         "eight": "8",
//         "nine": "9",
//         1: "one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "nine",
//     }
//     if (htmlClass === false) { return numberConversion[input] }
//     return "." + numberConversion[input]
// }