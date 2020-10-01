const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();

//Border
ctx.moveTo(0, 0);
ctx.lineTo(500, 0);
ctx.stroke();
ctx.lineTo(500, 500);
ctx.stroke();
ctx.lineTo(0, 500);
ctx.stroke();
ctx.lineTo(0, 0);
ctx.stroke();

//Inner Border
ctx.moveTo(20, 20);
ctx.lineTo(480, 20);
ctx.stroke();
ctx.lineTo(480, 480);
ctx.stroke();
ctx.lineTo(20, 480);
ctx.stroke();
ctx.lineTo(20, 20);
ctx.stroke();

//Border frame
ctx.moveTo(0, 0);
ctx.lineTo(20, 20);
ctx.stroke();
ctx.moveTo(500, 0);
ctx.lineTo(480, 20);
ctx.stroke();
ctx.moveTo(500, 500);
ctx.lineTo(480, 480);
ctx.stroke();
ctx.moveTo(0, 500);
ctx.lineTo(20, 480);
ctx.stroke();

//Base triangle
ctx.moveTo(400, 100);
ctx.lineTo(240, 420);
ctx.stroke();

ctx.moveTo(100, 100);
ctx.lineTo(240, 420);
ctx.stroke();

ctx.moveTo(100, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.moveTo(240, 420);
ctx.lineTo(240, 100);
ctx.stroke();

ctx.moveTo(160, 100);
ctx.lineTo(240, 420);
ctx.stroke();

ctx.moveTo(320, 100);
ctx.lineTo(240, 420);
ctx.stroke();

//Diamond top
ctx.moveTo(100, 100);
ctx.lineTo(160, 40);
ctx.stroke();

ctx.moveTo(400, 100);
ctx.lineTo(340, 40);
ctx.stroke();

ctx.moveTo(340, 40);
ctx.lineTo(160, 40);
ctx.stroke();

//Diamond top inner
ctx.moveTo(160, 40);
ctx.lineTo(240, 100);
ctx.stroke();

ctx.moveTo(240, 100);
ctx.lineTo(340, 40);
ctx.stroke();

ctx.moveTo(340, 40);
ctx.lineTo(320, 100);
ctx.stroke();

ctx.moveTo(160, 40);
ctx.lineTo(160, 100);
ctx.stroke();

ctx.moveTo(240, 100);
ctx.lineTo(240, 40);
ctx.stroke();

ctx.moveTo(400, 100);
ctx.lineTo(240, 40);
ctx.stroke();

ctx.moveTo(240, 40);
ctx.lineTo(120, 100);
ctx.stroke();

//Base

ctx.moveTo(100, 420);
ctx.lineTo(400, 420);
ctx.stroke();

ctx.moveTo(400, 420);
ctx.lineTo(400, 460);
ctx.stroke();

ctx.moveTo(400, 460);
ctx.lineTo(100, 460);
ctx.stroke();

ctx.moveTo(100, 460);
ctx.lineTo(100, 420);
ctx.stroke();

ctx.moveTo(120, 440);
ctx.lineTo(380, 440);
ctx.stroke();

ctx.moveTo(100, 420);
ctx.lineTo(240, 400);
ctx.stroke();

ctx.moveTo(240, 400);
ctx.lineTo(400, 420);
ctx.stroke();

ctx.moveTo(220, 400);
ctx.lineTo(240, 420);
ctx.stroke();

ctx.moveTo(240, 420);
ctx.lineTo(260, 400);
ctx.stroke();