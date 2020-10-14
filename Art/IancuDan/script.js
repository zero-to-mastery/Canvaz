var c = document.getElementById('fishCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(20, 50);
ctx.quadraticCurveTo(50, 140, 200, 50);
ctx.stroke();
ctx.fillStyle = 'green';
ctx.fill();

ctx.moveTo(20, 50);
ctx.quadraticCurveTo(50, 0, 200, 70);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(60, 60, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = 'black';
ctx.fill();
