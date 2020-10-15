let canvas;
let canvasContext;
let increment = 0;
let speed = 5;

window.onload = function () {
  canvas = document.getElementById('animationCanvas');
  canvasContext = canvas.getContext('2d');
  setInterval(drawEverything, 50);
};
function drawEverything() {
  bounce();
  increment = increment + speed;
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(increment, 200, 20, 20);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(increment, 20, 20, 20);
  canvasContext.fillStyle = 'orange';
  canvasContext.fillRect(increment, 100, 20, 20);
}
function bounce() {
  if (increment < 0) {
    speed = -speed;
  }
  if (increment > 500) {
    speed = -speed;
  }
}
