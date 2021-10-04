function drawClock() {
  ctx.arc(168, 168, radius, 0 , 2*Math.PI);
  ctx.fillStyle = "#61DBFB";
  ctx.fill();
}

var canvas = document.getElementById("circle_canvas");
var ctx = canvas.getContext("2d");
var radius = 32;
ctx.translate(radius, radius);
radius = radius * 0.90

drawClock();

function drawCircle(x, y, radiusX, radiusY, rotation) {
    context.beginPath(); 
    context.lineWidth = 11;
    context.strokeStyle = "#61DBFB";
    context.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    context.stroke();
}

var canvas = document.querySelector('#elipse1');
var context = canvas.getContext('2d');
var deg = 60;
var rad = deg * (Math.PI / 180.0);

drawCircle(200, 200, 140, 50, rad);

var canvas = document.querySelector('#elipse2');
var context = canvas.getContext('2d');
var deg = 120;
var rad = deg * (Math.PI / 180.0);

drawCircle(200, 200, 140, 50, rad);

var canvas = document.querySelector('#elipse3');
var context = canvas.getContext('2d');
var deg = 180;
var rad = deg * (Math.PI / 180.0);

drawCircle(200, 200, 140, 50, rad);



