var colors = generateRandomColors(6);
var resetButton = document.querySelector("#reset");
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) {
  //adds initial colors
  squares[i].style.backgroundColor = colors[i];
  //adds event listeners
  squares[i].addEventListener("click", function() {
    //grabs color from square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!"
      resetButton.textContent = "Play Again?"
      h1.style.backgroundColor = clickedColor;
      changeColor(clickedColor);
    } else {
      message.textContent = "Try Again!"
      this.style.background = "#232323"
    }
  });
}

resetButton.addEventListener("click", function() {
  //generates all new colors and changes squares
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

  h1.style.backgroundColor = "#232323";
});

function changeColor(color) {
  //loop through squares to match color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //creates array of num colors
  var arr = [];

  for (var i = 0; i < num; i++) {
    //gets and pushes random color to array
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  //generates random color
  var g = Math.floor(Math.random() * 256);
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  console.log(rgb);
  return rgb;
}
