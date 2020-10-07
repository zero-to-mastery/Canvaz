const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const drawBlueLine = (x, y) => {
  ctx.beginPath();
  ctx.fillStyle = 'lightskyblue';
  ctx.fillRect(x, y, 300, 50);
};

const drawCenter = () => {
  ctx.beginPath();
  ctx.arc(150, 75, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'yellow';
  ctx.fill();
};

const draw = () => {
  drawBlueLine(0, 0);
  drawCenter();
  drawBlueLine(0, 100);
};

draw();
