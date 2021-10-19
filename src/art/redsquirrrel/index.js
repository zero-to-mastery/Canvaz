const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Particle {
  constructor(x, y, size, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.weight = weight;
    this.flowingRight = true;
  }
  update() {
    // collision detected particle/mouse
    if (
      this.x > mouse.x - 50 &&
      this.x < mouse.x + 50 &&
      this.y > mouse.y - 5 &&
      this.y < mouse.y
    ) {
      this.weight = 0;
      this.x -= this.weight;
      this.y += this.weight;
      this.flowingRight = true;
    }

    if (!this.flowingRight) {
      this.x -= 2;
    } else {
      this.x += 4;
      this.weight += 0.05;
    }

    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * 60 + 200;
      this.weight = Math.random() * 0.5 + 1;
    }

    this.y += this.weight;
  }

  draw() {
    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

const particleArray = [];
const numberOfParticles = 180;

function createOfParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * 60 + 200;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 20 + 5;
    const weight = Math.random() * 0.5 + 1;
    particleArray.push(new Particle(x, y, size, weight));
  }
}

createOfParticles();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
