let playerX = "X"
let playerO = "O"
let playerXName = "X"
let playerOName = "O"
let currentPlayer = playerX;
let currentPlayerName = playerXName;
let winner = ''
let playerXWins = 0;
let playerOWins = 0;
let roundTracker = 0;
const gameBoard = ['','','','','','','',''
,'']
const winConditions = [
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
const squares = [one,two,three,four,five,six,seven,eight,nine];
let xWinsTracker = document.getElementById('xwins')
let oWinsTracker = document.getElementById('owins')
let player = document.getElementById('turn')
let myForm = document.getElementById('myform');
let game = document.getElementById("gameboard");
let winCounter = document.getElementById('display');
let buttons = document.getElementById('buttons')
let nameButton = document.getElementById('namebutton');
let results = document.getElementById('results');
let screen = document.getElementById('resultsscreen')


nameButton.addEventListener('click', () =>{
   playerXName = document.getElementById("playerXName").value;
   playerOName = document.getElementById("playerOName").value;
   currentPlayerName = playerXName;
   myForm.style.display = "none";  
   game.style.visibility = "visible"
   winCounter.style.visibility = "visible"
   buttons.style.visibility = "visible"
   results.style.visibility = "visible"
   update();
})

function update(){
player.textContent = "It is " + currentPlayerName + "'s turn"
xWinsTracker.textContent = playerXName + " Wins = " + playerXWins;
oWinsTracker.textContent = playerOName +" Wins = " + playerOWins;
}
next.addEventListener('click',() =>{
    clearBoard()
    screen.textContent = "You're a glutton for punishment"
})
reset.addEventListener('click',()=>{
    clearBoard()
    playerXWins = 0;
    playerOWins = 0;
    playerXName= "X"
    playerOName= "O"
    currentPlayerName = "X"
    myForm.style.display = "inline"
    game.style.visibility = "hidden"
    buttons.style.visibility = "hidden"
    winCounter.style.visibility = "hidden"
    results.style.visibility = "hidden"
    document.getElementById("playerXName").value = playerXName
    document.getElementById("playerOName").value = playerOName
    screen.textContent = "Who Will Win & Who Will Die?"
})

function clearBoard(){
    for(i=0;i<gameBoard.length; i++){
        gameBoard[i]=''
    }
    squares.forEach(element =>
        element.textContent = '')
        winner = ""
        currentPlayer = playerX;
        currentPlayerName = playerXName
        roundTracker = 0;
}

function checkWinsX(){
    for (i = 0; i<winConditions.length;i++)
    if(gameBoard[winConditions[i][0]] == "X" && gameBoard[winConditions[i][1]] == "X" && gameBoard[winConditions[i][2]] =="X"){
        screen.textContent = ("So long " + playerOName + ", it was nice knowin' ya")
        winner = 'X';
        playerXWins++
    }
}
function checkWinsO(){
    for (i = 0; i<winConditions.length;i++)
    if(gameBoard[winConditions[i][0]] == "O" && gameBoard[winConditions[i][1]] == "O" && gameBoard[winConditions[i][2]] =="O"){
        screen.textContent = ("So long " + playerXName + ", it was nice knowin' ya")
        winner = 'O';
        playerOWins++
    }
}

function checkDraw(){
    if(roundTracker == 9){
        screen.textContent = ("Tie Game")
    }
}
function numbers(x, y){
    x.addEventListener('click',() =>{
        if(gameBoard[y] == '' && winner == ''){
        x.textContent = currentPlayer;
            if (currentPlayer == playerX){
                gameBoard[y] = 'X'
                currentPlayer = playerO
                currentPlayerName = playerOName
            }
            else if (currentPlayer == playerO){
                gameBoard[y] = 'O'
                currentPlayer = playerX
                currentPlayerName = playerXName
                }
            return roundTracker++;
            }
        
    })
}
function allNumbers(){ 
    let x = 0
    squares.forEach(element =>
        numbers(element, x++))
    }



update()
allNumbers()

document.addEventListener('click',()=>{
    console.log
    if (winner == ''){
    checkWinsX()
    checkWinsO()
    if ( winner == ''){
    checkDraw();
    }
    update();
    }
})


