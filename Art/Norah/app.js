var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var my_gradient = ctx.createLinearGradient(0, 20, 0, 120);
my_gradient.addColorStop(0, 'yellow');
my_gradient.addColorStop(0.3, 'orange');
my_gradient.addColorStop(0.5, 'red');
my_gradient.addColorStop(1, 'tan');

ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

function circle(x, y, r, c, col) {
  ctx.beginPath();
  ctx.arc(x, y, r, c, 2 * Math.PI);
  ctx.fillStyle = col;
  ctx.fill();
}

function line(x1, y1, x2, y2, w) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = w;
  ctx.strokeStyle = 'green';
  ctx.stroke();
}
// circle(150, 95, 73, 15.7, 'white');
// circle(220, 40, 20, 0, 'white');
circle(150, 95, 73, 15.7, 'white');

// 1-middle
circle(80, 90, 6.2, 0, 'green');
// 2-left
circle(40, 96, 5, 0, 'green');
// 3-right
circle(113, 101.6, 4.8, 0, 'green');

// -left
line(40, 96, 80, 120, 10);
// -right
line(80, 130, 115, 100, 9);
// -middle
line(70, 400, 80, 90, 12);

// cactus texture
circle(106, 105, 1, 0, 'black');
circle(50, 100, 1, 0, 'black');
circle(80, 90, 1, 0, 'black');
circle(84, 125, 1, 0, 'black');
circle(78, 110, 1, 0, 'black');
circle(79.3, 140, 1, 0, 'black');

