const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: null,
  y: null,
  radius: 100,
};

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x + canvas.clientLeft / 2;
  mouse.y = e.y + canvas.clientTop / 2;
});

function drawImage() {
  let imageWidth = png.width;
  let imageHeight = png.height;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  class Particle {
    constructor(x, y, color, size) {
      this.x = x + canvas.width / 2 - png.width * 2;
      this.y = y + canvas.height / 2 - png.height * 2;
      this.color = color;
      this.size = 1.8;
      this.baseX = x + canvas.width / 2 - png.width * 2;
      this.baseY = y + canvas.height / 2 - png.height * 2;
      this.density = Math.random() * 30 + 2;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update() {
      ctx.fillStyle = this.color;
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;

      const maxDistance = 100;
      let force = (maxDistance - distance) / maxDistance;
      if (force < 0) force = 0;

      let directionX = forceDirectionX * force * this.density * 1;
      let directionY = forceDirectionY * force * this.density * 1;

      if (distance < mouse.radius + this.size) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 20;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy / 20;
        }
      }

      this.draw();
    }
  }

  function init() {
    particleArray = [];

    for (let y = 0, y2 = data.height; y < y2; y++) {
      for (let x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
          let positionX = x;
          let positionY = y;
          let color =
            'rgb(' +
            data.data[y * 4 * data.width + x * 4] +
            ',' +
            data.data[y * 4 * data.width + x * 4 + 1] +
            ',' +
            data.data[y * 4 * data.width + x * 4 + 2] +
            ')';
          particleArray.push(new Particle(positionX * 3.8, positionY * 3.8, color));
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }
  init();
  animate();
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });
}

const png = new Image();
png.src = 'https://avatars.githubusercontent.com/u/47628367?v=4';
png.setAttribute('crossOrigin', '');

window.addEventListener('load', e => {
  ctx.drawImage(png, 0, 0);
  drawImage();
});
