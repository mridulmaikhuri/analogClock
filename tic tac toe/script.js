console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let game = new Audio("gameover.mp3");

let turn = "X";
let isOver = false;

//Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check for win 
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e=>{
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText == boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.getElementsByClassName('info')[0].innerText = boxText[e[0]].innerText + " won";
            isOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            game.play();
            return;
        }
    })
}

//Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',function(){
        if (isOver === false && boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isOver){
                document.querySelector('.info').innerText = "Turn for " + turn;
            }           
        }
    })
})

//Logic for Reset button 

let reset = document.getElementById("reset");
reset.addEventListener('click',function(){
    let boxTexts = document.getElementsByClassName('boxText');
    Array.from(boxTexts).forEach(function(element){
        element.innerText = "";
    })

    turn = "X";
    document.querySelector('.info').innerText = "Turn for " + turn;
    isOver = false;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})