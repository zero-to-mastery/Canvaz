var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Canvas BG
//ctx.globalCompositeOperation = 'destination-over'
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, 'yellow');
my_gradient.addColorStop(0.5, 'white');
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
  ctx.strokeStyle = 'brown';
  ctx.stroke();
}

//Rectangles
ctx.beginPath();
ctx.rect(-30, 80, 80, 80);
ctx.fillStyle = 'green';
ctx.fill();

//branches
line(140, 80, 95, 150, 10);
line(150, 38, 138, 81, 7);
line(250, 0, 142, 81, 5);
line(150, 0, 146, 50, 5);
line(180, 0, 148, 50, 5);
line(220, 0, 210, 30, 5);
line(0, 0, 0, 100, 20);
line(30, 0, 3, 30, 5);

//land
circle(55, 140, 60, 0, 'green');
circle(110, 150, 30, 0, 'green');
circle(110, 150, 30, 0, 'green');

//leaves
circle(240, 40, 20, 0, 'white');
circle(15, 5, 50, 0, 'green');
circle(70, 5, 50, 0, 'green');
circle(140, 0, 30, 0, 'green');
circle(180, 10, 25, 0, 'green');
circle(210, 5, 15, 0, 'green');
circle(250, 4, 30, 0, 'green');

//flowers
circle(100, 40, 3, 0, 'purple');
circle(20, 30, 3, 0, 'pink');
circle(10, 10, 3, 0, 'purple');
circle(40, 15, 3, 0, 'pink');
circle(210, 18, 3, 0, 'pink');
circle(250, 10, 3, 0, 'purple');
circle(270, 3, 3, 0, 'pink');
circle(80, 20, 3, 0, 'pink');
circle(120, 20, 3, 0, 'purple');
circle(145, 10, 3, 0, 'pink');
circle(165, 20, 3, 0, 'purple');
circle(190, 20, 3, 0, 'purple');
circle(173, 0, 3, 0, 'purple');
circle(60, 50, 4, 0, 'purple');
circle(60, 3, 4, 0, 'pink');
circle(100, 3, 4, 0, 'pink');

circle(95, 20, 4, 0, 'pink');
circle(40, 30, 3.5, 0, 'pink');
circle(25, 3, 3.5, 0, 'pink');
circle(60, 25, 3.5, 0, 'purple');
circle(220, 10, 3.5, 0, 'pink');
circle(235, 20, 3.5, 0, 'pink');
circle(260, 25, 3.5, 0, 'purple');
circle(82, 10, 3.5, 0, 'purple');
circle(130, 1, 3.5, 0, 'pink');
circle(140, 26, 3.5, 0, 'pink');
circle(175, 30, 3.5, 0, 'pink');
circle(195, 7, 3.5, 0, 'purple');
circle(235, 0, 3.5, 0, 'pink');
circle(75, 40, 3.5, 0, 'purple');
circle(15, 50, 3.5, 0, 'purple');
circle(105, 3, 3.5, 0, 'pink');
