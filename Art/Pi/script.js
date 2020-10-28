const canvas = document.getElementById('myCanvasTag');
const ctx = canvas.getContext('2d');

ctx.font = '700 100px Open Sans Condensed';
ctx.textBaseline = 'top';

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillText('K', 50, 320);
  ctx.fillRect(50, 100, 50, 200);
  ctx.fillText('E', 110, 320);
  ctx.fillRect(110, 100, 50, 200);
  ctx.fillText('X', 170, 320);
  ctx.fillRect(170, 100, 50, 200);
  ctx.fillText('P', 230, 320);
  ctx.fillRect(230, 100, 50, 200);
  ctx.fillStyle = '#feac31';
  ctx.fillRect(50, 0, 50, Math.random() * 250);
  ctx.fillRect(110, 0, 50, Math.random() * 250);
  ctx.fillRect(170, 0, 50, Math.random() * 250);
  ctx.fillRect(230, 0, 50, Math.random() * 250);
}, 250);
