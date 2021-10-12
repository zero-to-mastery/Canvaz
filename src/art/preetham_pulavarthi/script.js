const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const mouse = {
  x: null,
  y: null,
  radius: 50,
};

window.addEventListener('mousemove', event => {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse.x, mouse.y);
});

ctx.font = '30px Verdana';
ctx.fillStyle = 'white';
ctx.fillText('Hello World!', 0, 40);
const data = ctx.getImageData(0, 0, 100, 100);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 40 + 5;
  }

  draw() {
    const index = Math.floor(Math.random() * 8 + 1);
    const colors = [
      'red',
      'pink',
      'orange',
      'blue',
      'white',
      'yellow',
      'green',
      'cyan',
    ];
    ctx.fillStyle = colors[index];
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
    }
  }
}

const init = () => {
  particles = [];
  for (let i = 0; i <= 10000; i++) {
    particles.push(
      new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
    );
  }
};

init();

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  requestAnimationFrame(animate);
};

animate();
