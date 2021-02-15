/* Constants */
/* Game Logic Variables and State */
let boardState = [null, 0, null, 1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  12, null, 13, null, 14, null, 15, null, 16, null, 17, null, 18, null, 19, null, 20, null, 21, null, 22, null, 23, null]

let turn = true
let blacksTotal = 12
let redsTotal = 12
let userPieces

//  
let selectedPiece = {
    pieceId: -1,
    boardPiecesIndex: -1,
    seventhSquareFromPiece: false,
    ninthSquareFromPiece: false,
    fourteenthSquareFromPiece: false,
    eighteenthSquareFromPiece: false,
    negativeSeventhSquareFromPiece: false,
    negativeNinthSquareFromPiece: false,
    negativeFourteenthSquareFromPiece: false,
    negativeEighteenthSquareFromPiece: false,
}

/* DOM References */
const squares = document.querySelector('td')
let blacksPieces = document.querySelector('span')
let redsPieces = document.querySelector('p')
const blacksTurnBox = document.getElementById('user1-turn-box')
const redsTurnBox = document.getElementById('user2-turn-box')

/* Functions and Game Logic */





/* Event Listeners */

// Adds event listeners to red or black pieces depending on whose turn it is
const addEventListenersToUserPieces = () => {
    if (turn) {
        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].addEventListener('click', getUserTurn) 
        }
    } 
    else {
        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].addEventListener('click', getUserTurn )
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
    removeSquareOnclick()
    resetHighlightedMove() 
}
///////////////////////////////////////////////////////////////////////////////////
const removeSquareOnclick = () => {
    for (i = 0; i < squares.length; i++) {
        squares[i].removeAttribute('click');
    }             
}


const resetHighlightedMove = () => {
    for (let i = 0; i < allUserPieces.length; i++) {
        allUserPieces[i].style.border = "solid green 1px" //COMEBACKANDCHANGE   //WORK ON THIS
    }
    resetSelectedPiecesinfo()    //selected pieces properties
    getSelectedPieceInfo()
}


const resetSelectedPiecesInfo = () => {
    
        selectedPiece.pieceId = -1;
        boardPiecesIndex = -1;
        seventhSquareFromPiece = false;
        ninthSquareFromPiece = false;
        selectedPiece.fourteenthSquareFromPiece = false;
        selectedPiece.eighteenthSquareFromPiece = false;
        selectedPiece.negativeSeventhSquareFromPiece = false;
        selectedPiece.negativeNinthSquareFromPiece = false;
        selectedPiece.negativeFourteenthSquareFromPiece = false;
        selectedPiece.negativeEighteenthSquareFromPiece = false;
}    

///////////////////////////////////////////////////////////////////////////////////
const getSelectedPieceInfo = () => {
    selectedPiece.pieceId = parseInt(event.target.id)
    selectedPiece.boardPiecesIndex = findPiece(selectedPiece.pieceId) \
    /* function to check if piece is king */
    getAvailableMoves()
}

/* call back function */
let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId)
    return boardState.indexOf(parsed)
}

const checkAvailableMoves = () => {

}





// Function call starts game
addEventListenersToUserPieces()

