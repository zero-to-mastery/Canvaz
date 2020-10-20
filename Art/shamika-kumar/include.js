const canvas = document.getElementById('canvas');
var ctx;

var y1 = 30;
var y2 = 100;
var y3 = 70;
var dy1 = 5;
var dy2 = 5;
var dy3 = 5;

function init() {
  ctx = myCanvas.getContext('2d');
  setInterval(draw, 10);
}

function draw() {
  ctx.clearRect(0, 0, 500, 250);
  ctx.beginPath();
  ctx.beginPath();
  ctx.arc(60, y1, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'orange';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(130, y2, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'purple';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, y3, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'red';
  ctx.fill();

  if (y1 < 30 || y1 > 280) dy1 = -dy1;
  y1 += dy1;
  if (y2 < 30 || y2 > 280) dy2 = -dy2;
  y2 += dy2;
  if (y3 < 30 || y3 > 280) dy3 = -dy3;
  y3 += dy3;
}
