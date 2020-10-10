const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.fillStyle = '#00ffbf';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var x1 = 500;
var y1 = 150;

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x1 + 100, y1 + 50);
ctx.lineTo(x1 + 100, y1 + 150);
ctx.lineTo(x1, y1 + 100);
ctx.fillStyle = '#0080FF';
ctx.fill();

var x2 = x1 + 100;
var y2 = y1 + 50;

ctx.beginPath();
ctx.moveTo(x2, y2);
ctx.lineTo(x2 + 100, y2 - 50);
ctx.lineTo(x2 + 100, y2 + 50);
ctx.lineTo(x2, y2 + 100);
ctx.fillStyle = '#00bfff';
ctx.fill();

var x3 = x1;
var y3 = y1;

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x1 + 100, y1 - 50);
ctx.lineTo(x1 + 200, y1);
ctx.lineTo(x2, y2);
ctx.fillStyle = '#00ffff';
ctx.fill();

ctx.fillStyle = '#ffffff';
ctx.font = '90px Arial';
ctx.fillText('Hacktoberfest', 330, 400);
ctx.fillText('2020', 500, 500);
