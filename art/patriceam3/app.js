const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

ctx.font = '50px serif';
ctx.fillStyle = '#1cdf15';
ctx.fillText('Draw something ...', 50, 90);

const edge = 30;
let drawing = false;

const mouse = {
  x: null,
  y: null,
};

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Root {
  constructor(x, y, color, centerX, centerY) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.centerX = centerX;
    this.centerY = centerY;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw() {
    this.speedX += (Math.random() - 0.5) / 2;
    this.speedY += (Math.random() - 0.5) / 2;
    this.x += this.speedX;
    this.y += this.speedY;

    const distanceX = this.x - this.centerX;
    const distanceY = this.y - this.centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const radius = ((-distance / edge + 1) * edge) / 10;

    if (radius > 0) {
      requestAnimationFrame(this.draw.bind(this));
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }
  }
}

function branchOut() {
  if (drawing) {
    const centerX = mouse.x;
    const centerY = mouse.y;

    for (let i = 0; i < 3; i++) {
      const root = new Root(mouse.x, mouse.y, 'red', centerX, centerY);
      root.draw();
    }
  }
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.font = '50px serif';
  ctx.fillStyle = '#1cdf15';
  ctx.fillText('Draw something ...', 50, 90);
});

window.addEventListener('mousemove', function () {
  branchOut();
});

window.addEventListener('mousedown', function () {
  drawing = true;
});
window.addEventListener('mouseup', function () {
  drawing = false;
});
