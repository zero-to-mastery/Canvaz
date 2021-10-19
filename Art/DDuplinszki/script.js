var drawing = document.getElementById('canvas-red');
var ctx = drawing.getContext('2d');

ctx.fillStyle = '#b02b2c';
//left side

ctx.moveTo(15, 0);
ctx.lineTo(105, 140);
ctx.lineTo(105, 25);
ctx.moveTo(105, 140);
ctx.lineTo(15, 115);
ctx.lineTo(15, 0);

//centre

ctx.moveTo(115, 0);
ctx.lineTo(195, 25);
ctx.lineTo(195, 140);
ctx.moveTo(195, 140);
ctx.lineTo(115, 140);
ctx.lineTo(115, 0);

//right side

ctx.moveTo(205, 0);
ctx.lineTo(285, 25);
ctx.lineTo(285, 115);
ctx.moveTo(285, 115);
ctx.lineTo(205, 140);
ctx.lineTo(205, 0);

ctx.fill();

var drawing2 = document.getElementById('canvas-logo');
var ctx2 = drawing2.getContext('2d');

ctx2.fillStyle = 'white';

ctx2.moveTo(150, 0);
ctx2.lineTo(250, 125);
ctx2.lineTo(200, 137.5);
ctx2.lineTo(170, 112.5);
ctx2.lineTo(187.5, 112.5);
ctx2.lineTo(150, 60);
ctx2.lineTo(112.5, 112.5);
ctx2.lineTo(130, 112.5);
ctx2.lineTo(100, 137.5);
ctx2.lineTo(50, 125);
ctx2.lineTo(150, 0);

ctx2.fill();
