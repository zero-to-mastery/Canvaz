var canvas = document.getElementById("my-canvas")
var ctx = canvas.getContext("2d");

var circleBtn = document.getElementById("circle-btn");
var rectangleBtn = document.getElementById("rectangle-btn");
var squareBtn = document.getElementById("square-btn");
var colorInput = document.getElementById('color');
var color = 'red';

colorInput.addEventListener('change', function(){
    color = colorInput.value;
});

circleBtn.addEventListener('click', function(){
    drawCircle();
})

rectangleBtn.addEventListener('click', function(){
    drawRectangle();
})

squareBtn.addEventListener('click', function(){
    drawSquare();
})

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(300, 175, 110, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawRectangle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(125, 75, 350, 200);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(170, 65, 250, 230);
    ctx.fillStyle = color;
    ctx.fill();
  }