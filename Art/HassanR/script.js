const canvas = document.getElementById('shape');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(75, 25);
ctx.lineTo(25, 75);
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 25);
ctx.lineTo(100, 100);
ctx.lineTo(25, 100);
ctx.fill();

ctx.beginPath();
ctx.moveTo(25, 120);
ctx.lineTo(25, 200);
ctx.lineTo(100, 200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 120);
ctx.lineTo(40, 120);
ctx.lineTo(100, 180);
ctx.fill();
