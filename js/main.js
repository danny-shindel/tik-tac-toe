/*----- constants -----*/
const moveLookup = {
    '0': '<button></button>',
    '1' : 'X',
    '-1' : 'O'
};
``
/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
// const boardEl = [...document.querySelectorAll('#board > div')];
const replayBtn = document.getElementById('pa');
const circle = document.getElementById('b');


/*----- event listeners -----*/
document.querySelector('board > div > button')
    addEventListener('click', handleMove);
replayBtn.addEventListener('click', init);

/*----- functions -----*/
init();

function handleMove(evt){
    const idx = parseInt(evt.target.parentElement.id.replace("b", ""));
    if (winner) return;
    if (board[idx] === 1 || board[idx] === -1) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}


function getWinner(){
    let winner = null
    if (Math.abs(board[0] + board[1] + board[2]) === 3){
        return turn *= -1
    } if (Math.abs(board[3] + board[4] + board[5]) === 3){
        return turn *= -1
    } if (Math.abs(board[6] + board[7] + board[8]) === 3){
        return turn *= -1
    } if (Math.abs(board[0] + board[3] + board[6]) === 3){
        return turn *= -1
    } if (Math.abs(board[1] + board[4] + board[7]) === 3){
        return turn *= -1
    } if (Math.abs(board[2] + board[5] + board[8]) === 3){
        return turn *= -1
    } if (Math.abs(board[0] + board[4] + board[8]) === 3){
        return turn *= -1
    } if (Math.abs(board[2] + board[4] + board[6]) === 3){
        return turn *= -1
    }else if (!board.includes(0)) return winner = 'T';
    // } else {
    //     return
    // }
}


function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = null;
    render ();
}

function render() {
    board.forEach(function(spaceVal, spaceIdx) {
        const div = document.getElementById(`b${spaceIdx}`)
        div.innerHTML = moveLookup[spaceVal];
        if (spaceVal === 1){
            div.setAttribute("style", "color:lightblue; font-size:8vmin");
        } else if (spaceVal === -1) {
            div.setAttribute("style", "color:lightseagreen; font-size:8vmin");   
        }
    });
    if (winner === 'T') {
        msgEl.textContent = "It's a Tie!!!";
    } else if (winner) {
        msgEl.innerHTML = `${moveLookup[winner]} Wins!`;
    } else {
        msgEl.innerHTML = `${moveLookup[turn]}'s Turn`;
    }
    replayBtn.style.visibility = winner ? 'visible' : 'hidden';
    if (turn === 1){
        circle.setAttribute("style", "background-color:black");
    } else {
        circle.style.backgroundColor = "black";
    }
}       