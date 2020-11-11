// variables
const FPS = 30;
var bs = 80;
var bx, by;
var xv, yv;
var canvas, context;

// load canvas
canvas = document.getElementById('canvas');
canvasSize();
context = canvas.getContext('2d');

//function to make the canvas full size to the screen
function canvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// set up interval (game loop)
setInterval(update, 1000 / FPS);

// ball starting position
bx = canvas.width / 2;
by = canvas.height / 2;

// random ball starting speed
xv = Math.floor(Math.random() * 125 + 100) / FPS;
yv = Math.floor(Math.random() * 125 + 100) / FPS;

// random ball direction
if (Math.floor(Math.random() * 2) == 0) {
  xv = -xv;
}
if (Math.floor(Math.random() * 2) == 0) {
  yv = -yv;
}

// update function
function update() {
  // move the ball
  bx += xv;
  by += yv;

  // bounce the ball of each wall
  if (bx - bs / 2 < 0 && xv < 0) {
    xv = -xv;
  }
  if (bx + bs / 2 > canvas.width && xv > 0) {
    xv = -xv;
  }
  if (by - bs / 2 < 0 && yv < 0) {
    yv = -yv;
  }
  if (by + bs / 2 > canvas.height && yv > 0) {
    yv = -yv;
  }

  // draw background and ball
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  //function to make the color of the rectangles
  function colorizedRect() {
    for (var i = 0; i < 4; i++) {
      const color = ['red', 'purple', 'white', 'yellow'];
      const randomColor = Math.floor(Math.random() * color.length);
      context.beginPath();
      context.fillStyle = color[randomColor];
      context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
    }
  }
  colorizedRect();
}
