// find the canvas element
var canvas = document.getElementById('myCanvas');
// create a drawing object
var ctx = canvas.getContext('2d');

// canvas settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// DRAWING:
// rectanlge
ctx.fillStyle = "#006600";
ctx.fillRect(0, 0, innerHeight * 2, innerHeight);
// circle:
ctx.beginPath();
ctx.arc(innerHeight, innerHeight / 2, 200, 0, 2 * Math.PI);
ctx.fillStyle = '#ff0000';
ctx.fill();
ctx.stroke();