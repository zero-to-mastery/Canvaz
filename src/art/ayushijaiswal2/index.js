const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#888888';
ctx.fillStyle = '#3D0000';
ctx.moveTo(200, 40);
ctx.lineTo(380, 160);
ctx.lineTo(20, 160);
ctx.lineTo(200, 40);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#888888';
ctx.fillStyle = '#950101';
ctx.moveTo(130, 40);
ctx.lineTo(240, 160);
ctx.lineTo(20, 160);
ctx.lineTo(200, 40);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#888888';
ctx.fillStyle = '#FF0000';
ctx.moveTo(100, 40);
ctx.lineTo(390, 160);
ctx.lineTo(200, 160);
ctx.lineTo(20, 40);
ctx.fill();
ctx.stroke();
ctx.closePath();
