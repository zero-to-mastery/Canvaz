const canvas = document.getElementById('flagCanvaz');

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#6CACE4';
ctx.fillRect(0, 0, 500, 100);

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 100, 500, 100);

ctx.fillStyle = '#6CACE4';
ctx.fillRect(0, 200, 500, 100);

ctx.beginPath();

const x = 250;
const y = 150;
const r = 45;

const theta = (2 * Math.PI) / 28;

ctx.strokeStyle = '#FFB81C';
ctx.lineWidth = 3;
ctx.stroke();

for (i = 0; i < 28; i++) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + r * Math.cos(theta * i), y + r * Math.sin(theta * i));
  ctx.stroke();
}
ctx.stroke();