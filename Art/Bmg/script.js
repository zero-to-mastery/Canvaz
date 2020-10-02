const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF9933';
ctx.fillRect(0, 0, 450, 100);

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 100, 450, 100);

ctx.fillStyle = '#138808';
ctx.fillRect(0, 200, 450, 100);

ctx.beginPath();

x = 225;
y = 150;
r = 45;
theta = (2 * Math.PI) / 24;

ctx.strokeStyle = '#000080';
ctx.lineWidth = 2;
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.stroke();
for (i = 0; i < 24; i++) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + r * Math.cos(theta * i), y + r * Math.sin(theta * i));
  ctx.stroke();
}
ctx.stroke();

// ctx.stroke();
