const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

// Walls
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#888888';
ctx.fillStyle = '#b3a094';
ctx.rect(60, 160, 280, 160);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Door
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#eeeeee';
ctx.fillStyle = '#623c1e';
ctx.rect(180, 240, 40, 80);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Windows
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#eeeeee';
ctx.fillStyle = '#cf9b26';
ctx.rect(110, 256, 40, 40);
ctx.rect(250, 256, 40, 40);
ctx.rect(100, 190, 200, 10);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Roof
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#888888';
ctx.fillStyle = '#272730';
ctx.moveTo(200, 40);
ctx.lineTo(380, 160);
ctx.lineTo(20, 160);
ctx.lineTo(200, 40);
ctx.fill();
ctx.stroke();
ctx.closePath();