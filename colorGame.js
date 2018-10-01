var numSquares=6;
var colors =[];
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybutton=document.querySelector("#easy");
var hardbutton=document.querySelector("#hard");
var modeButtons=document.querySelectorAll(".mode");

init();
function init()
{
    for(var i=0; i<modeButtons.length;i++) {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Hard") {
                numSquares=6;
            } else {
                numSquares=3;
            }
            reset();
        });
    }
    for(var i=0;i<squares.length;i++) {
        squares[i].addEventListener("click",function()
        {
            var clickedColor=this.style.backgroundColor;
            if(clickedColor==pickedColor) {
                messageDisplay.textContent="Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
                resetbutton.textContent="Play Again?";
            } else {
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
            }
        });
    }
    reset();
}

function reset() {
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;messageDisplay.textContent=" ";
    resetbutton.textContent="New Colors";
    for(var i=0;i<squares.length;i++) {
        if(colors[i]) {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        } else {
            squares[i].style.display="none";
        }
    }
    h1.style.background="steelblue";
}
resetbutton.addEventListener("click",function()
{
    resetbutton.textContent="New Colors";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++) {
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.background="steelblue";
    messageDisplay.textContent=" ";
});

colorDisplay.textContent=pickedColor;

function changeColors(color) 
{
    for(var i=0;i<squares.length;i++) {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor() 
{
    return colors[(Math.floor(Math.random()*colors.length))];
}

function generateRandomColors(num) {
    var arr=[]

    for(var i=0;i<num;i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}