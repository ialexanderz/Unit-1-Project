/* Constants */
/* Game Logic Variables and State */
let boardState = [null, 0, null, 1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  12, null, 13, null, 14, null, 15, null, 16, null, 17, null, 18, null, 19, null, 20, null, 21, null, 22, null, 23, null]

let turn = true
let blacksTotal = 12
let redsTotal = 12
let allUserPieces = null

let selectedPiece = {
    pieceId: -1,
    // Look at probably changing variable names | Placing object in array could cause issues
    selectedPiece.indexOfPiecesSquare: -1,
    selectedPiece.seventhSquareFromPiece: false,
    selectedPiece.ninthSquareFromPiece: false,
    fourteenthSquareFromPiece: false,
    eighteenthSquareFromPiece: false,
    negativeSeventhSquareFromPiece: false,
    negativeNinthSquareFromPiece: false,
    negativeFourteenthSquareFromPiece: false,
    negativeEighteenthSquareFromPiece: false,
}

/* DOM References */
let squares = document.querySelector('td')
let blacksPieces = document.querySelector('span')
let redsPieces = document.querySelector('p')
let redsTurnBox = documemt.getElementById('user-1-turn-box')
let blacksTurnBox = document.getElementById('user-2-turn-box')

/* Functions and Game Logic */





/* Event Listeners */

// Adds event listeners to both players pieces
const addEventListenersToUserPieces = () => {
    if (turn) {
        for (i = 0; i < blacksPieces.length; i++) {
            userOnePieces[i].addEventListener('click', getUserTurn) 
        }
    } 
    else {
        for (i = 0; i < redsPieces.length; i++) {
            unerTwoPieces[i].addEventListener('click', getUserTurn )
        }
    }
}
            

const getUserTurn = () => {
    if (turn) {
        let usersPieces = blacksPieces;
    }
    else {
        let userPieces = redsPieces;
    }

    removeSquareClickEvent()
}

const removeSquareClickEvents = () => {
    for (i = 0; i < squares.length; i++) {
        squares[i].removeAttribute('click');
    }                  
    getPieceId()
    resetHighlightedMoves()      
}

const getPieceId = () => {
    for (i = 0; i < squares.length; i ++) {
        square[i].removeAttribute('onclick')
    }
    resetHighlightedSquares()
}

const resetHighlightedSquares = () => {
    for (i = 0; i < allUserPieces.length; i++) {
        allUserPieces[i].style.border = COMEBACKANDCHANGE   //WORK ON THIS
    }
    resetSelectedPiece()    //selected pieces properties
    getSelectedPiece()
}

const resetSelectedPiece = () => {
    
        selectedPiece.pieceId = -1,
        selectedPiece.indexOfPiecesSquare = -1,
        selectedPiece.seventhSquareFromPiece = false,
        selectedPiece.ninthSquareFromPiece = false,
        selectedPiece.fourteenthSquareFromPiece = false,
        selectedPiece.eighteenthSquareFromPiece = false,
        selectedPiece.negativeSeventhSquareFromPiece = false,
        selectedPiece.negativeNinthSquareFromPiece = false,
        selectedPiece.negativeFourteenthSquareFromPiece = false,
        selectedPiece.negativeEighteenthSquareFromPiece = false,
    }

}

// Function call starts game
addEventListenersToUserPieces()

// const move = (event) => {

// }

// const respond = (event) => {
//     document.getElementById('14').addEventListener('click', move)
    
// }


// document.getElementById('12').addEventListener('click', respond)