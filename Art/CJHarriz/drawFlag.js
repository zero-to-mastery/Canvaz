var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 640);
ctx.lineTo(400, 360);
ctx.lineTo(0, 80);
ctx.strokeStyle = 'RGB(255,185,21)';
ctx.fillStyle = 'RGB(255,185,21)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 580);
ctx.lineTo(320, 360);
ctx.lineTo(0, 140);
ctx.strokeStyle = 'RGB(0,0,0)';
ctx.fillStyle = 'RGB(0,0,0)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 720);
ctx.lineTo(500, 440);
ctx.lineTo(1200, 440);
ctx.lineTo(1200, 720);
ctx.strokeStyle = 'RGB(255,255,255)';
ctx.fillStyle = 'RGB(255,255,255)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(500, 280);
ctx.lineTo(1200, 280);
ctx.lineTo(1200, 0);
ctx.strokeStyle = 'RGB(255,255,255)';
ctx.fillStyle = 'RGB(255,255,255)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(510, 250);
ctx.lineTo(1200, 250);
ctx.lineTo(1200, 0);
ctx.strokeStyle = 'RGB(225,57,45)';
ctx.fillStyle = 'RGB(255,57,45)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 720);
ctx.lineTo(510, 470);
ctx.lineTo(1200, 470);
ctx.lineTo(1200, 720);
ctx.strokeStyle = 'RGB(0,12,138)';
ctx.fillStyle = 'RGB(0,12,138)';
ctx.fill();
ctx.stroke();
