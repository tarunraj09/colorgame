//   var game = {}


// game.init = function(){
// 	setUpModeButtons();
// 	setUpSquares();
// 	reset();
// }

// game.init();


var numSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// Ternary operator
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	// add initial color to squares
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
			// grab color of clicked one
		 var clickedColor =	this.style.background;
		 // compare color to pickedColor
		 
		 if(clickedColor === pickedColor){
		 	messageDisplay.textContent = "Correct!!!";
		 	changeColors(clickedColor);
		 	h1.style.background = clickedColor;
		 	resetButton.textContent = "Play Again??";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";

		}

	});
}
}


function reset(){
	colors = generateRandomColor(numSquares);
		// new pickedColor
	pickedColor = pickColor();
	// Generate new colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";

	squares[i].style.background = colors[i];
	}
	else {
		squares[i].style.display = "none";
	}
}
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	if(resetButton.textContent == "Play Again??"){
		resetButton.textContent = "New Colors" ;
	}
	messageDisplay.textContent = " ";


}





function changeColors(color){
	for(var i = 0; i<squares.length ; i++){
		squares[i].style.background = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length) ;
	return colors[random];
}

function generateRandomColor(num){

	var arr = [];

	for(var i = 0 ;i < num ; i++){
		arr.push(randomColor());

	}
	return arr ;	

}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g +", " + b + ")";
}

resetButton.addEventListener("click",function(){
	reset();

});




function reset(){
	colors = generateRandomColor(numSquares);
		// new pickedColor
	pickedColor = pickColor();
	// Generate new colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";

	squares[i].style.background = colors[i];
	}
	else {
		squares[i].style.display = "none";
	}
}
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	if(resetButton.textContent == "Play Again??"){
		resetButton.textContent = "New Colors" ;
	}
	messageDisplay.textContent = " ";


}


// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 	if(colors[i]){
// 		squares[i].style.background = colors[i];
// 	}
// 	else{
	
// 	squares[i].style.display = "none";
// 	}
//    }
//    messageDisplay.textContent = " ";


// });


// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 		colors = generateRandomColor(numSquares);
// 		pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	   }
// 	   messageDisplay.textContent = " ";

// });


