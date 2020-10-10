const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 10;

const [centerX, centerY] = [canvas.width / 2, canvas.height / 2];

let angle, r, x, y, rSpeed, aSpeed;
function init(e) {
  e?.preventDefault();
  ctx.lineCap = 'round';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  angle = 0;
  r = 1;
  [x, y] = [centerX, centerY];
  rSpeed = Number(document.getElementById('radius-speed').value);
  aSpeed = Number(document.getElementById('angle-speed').value);
  draw();
}

function draw() {
  if (x < 0 || y < 0 || x > centerX * 2 || y > centerY * 2) {
    return;
  }

  const newX = x + Math.cos(angle) * r;
  const newY = y + Math.sin(angle) * r;
  ctx.strokeStyle = `hsl(${(angle * 10) % 360}, 60%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newX, newY);
  ctx.stroke();
  r += rSpeed;
  angle += aSpeed;
  [x, y] = [newX, newY];
  setTimeout(draw, 1000 / 60);
}

init();

document.getElementById('form').addEventListener('submit', init);
