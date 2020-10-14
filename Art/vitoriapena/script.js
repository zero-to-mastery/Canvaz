var canvas = document.getElementById('moon');
var ctx = canvas.getContext('2d');
var centerWidth = canvas.width / 2;
var centerHeight = canvas.height / 2;
var radius = 157;

function draw() {
  ctx.beginPath();
  ctx.arc(centerWidth, centerHeight, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fillStyle = '#FEFEDF';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#FCF8FF';
  ctx.stroke();
}

draw();

canvas.addEventListener('mouseover', mouseOver, false);
canvas.addEventListener('mouseout', mouseOut, false);

function mouseOver() {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, centerWidth - 160, centerHeight - 160);
  };
  img.src =
    'https://www.freeiconspng.com/thumbs/moon-png/moon-png-no-background-15.png';
}

function mouseOut() {
  draw();
}
