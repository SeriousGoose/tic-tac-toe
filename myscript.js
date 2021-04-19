let playerX = "X"
let playerO = "O"
let currentPlayer = playerX;
let winner = ''
let playerXWins = 0;
let playerOWins = 0;
let roundTracker = 0;
const gameBoard = ['','','','','','','',''
,'']
let winConditions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8]
]

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let reset = document.getElementById('reset');
let next = document.getElementById('next');
let squares = [one,two,three,four,five,six,seven,eight,nine];
let xWinsTracker = document.getElementById('xwins')
let oWinsTracker = document.getElementById('owins')
let player = document.getElementById('turn')

function update(){
player.textContent = "It is Player " + currentPlayer + "'s turn"
oWinsTracker.textContent = "Player O Wins = " + playerOWins;
xWinsTracker.textContent = "Player X Wins = " + playerXWins;
}
next.addEventListener('click',() =>{
    clearBoard()
})
reset.addEventListener('click',()=>{
    clearBoard()
    playerXWins = 0;
    playerOWins = 0;
})

function clearBoard(){
    for(i=0;i<gameBoard.length; i++){
        gameBoard[i]=''
    }
    squares.forEach(element =>
        element.textContent = '')
        winner = ""
        currentPlayer = playerX;
}

function checkWinsX(){
    for (i = 0; i<winConditions.length;i++)
    if(gameBoard[winConditions[i][0]] == "X" && gameBoard[winConditions[i][1]] == "X" && gameBoard[winConditions[i][2]] =="X"){
        alert("Player X Wins")
        winner = 'X';
        playerXWins++
    }
}
function checkWinsO(){
    for (i = 0; i<winConditions.length;i++)
    if(gameBoard[winConditions[i][0]] == "O" && gameBoard[winConditions[i][1]] == "O" && gameBoard[winConditions[i][2]] =="O"){
        alert("Player O Wins")
        winner = 'O';
        playerOWins++
    }
}
function checkDraw(){
    if(roundTracker == 9){
        alert("Tie Game")
    }
}
function numbers(x, y){
    x.addEventListener('click',() =>{
        if(gameBoard[y] == '' && winner == ''){
        x.textContent = currentPlayer;
            if (currentPlayer == playerX){
                gameBoard[y] = 'X'
                currentPlayer = playerO
            }
            else if (currentPlayer == playerO){
                gameBoard[y] = 'O'
                currentPlayer = playerX
                }
            }
        return roundTracker++;
    })
}

update()
numbers(one,0)
numbers(two,1)
numbers(three,2)
numbers(four,3)
numbers(five,4)
numbers(six,5)
numbers(seven,6)
numbers(eight,7)
numbers(nine,8);

let check = document.querySelectorAll('.square');
document.addEventListener('click',()=>{
    if (winner == ''){
    checkWinsX()
    checkWinsO()
    if ( winner == ''){
    checkDraw();
    }
    update();
    }
})


