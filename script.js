var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
//var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

var newColors = document.getElementById("reset");

colorDisplay.textContent = pickedColor;
easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});
hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        // squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";
        
    }
});


// resetButton.addEventListener("click",function(){
//     //generate all new colors
//     colors = generateRandomColors(numSquares);
//     //pick a new random color from array
//     pickedColor = pickcolor();
//     //change color display to match picked color
//     colorDisplay.textContent = pickedColor;
//     //change  colors af the square
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
//     });


//colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    //adding initial color to the squares
    squares[i].style.backgroundColor = colors[i];

    //adding click listeners to the squares
    squares[i].addEventListener("click",function(){
   //grab color of clicked square
   var clickedColor = this.style.backgroundColor;
   //compare color to picked square
   if(clickedColor === pickedColor){
       messageDisplay.textContent = "Correct";
newColors.textContent = "Play Again";
       changeColor(clickedColor);
       h1.style.backgroundColor = clickedColor;
   } else{
       this.style.backgroundColor = "#232323";
       messageDisplay.textContent = "Try Again";
   }

    });
}

function changeColor(colors){
    //loop through all squares 
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors;
    }
    //change each color to match given color
}
function pickcolor(){
     var random =  Math.floor(Math.random() * colors.length);
     return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
        //get random colors and push into arr array
    }
    //return that array
    return arr;

}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    //rgb
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColors.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "new colors"
    messageDisplay.textContent = ""
    for(var i = 0; i <squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue'
});