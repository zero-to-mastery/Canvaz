const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 10;
let adjustY = 10;
ctx.lineWidth = 3;

//handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 100
};

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

ctx.fillStyle = 'white';
ctx.font = '30px Verdana';
ctx.fillText('ZTM', 0, 30);
let textCoordinates = ctx.getImageData(0, 0, 100, 100);

console.log(textCoordinates.height);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 50 + 10;
    this.distance;
  }

  draw() {
    // let gradient = ctx.createLinearGradient(0, 0, 170, 0);
    // gradient.addColorStop(0, '#f51767');
    // gradient.addColorStop(0.5, '#ffffff');
    // gradient.addColorStop(1, '#2dcc7d');
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.strokeStyle = 'rgba(245, 23, 103,1)';
    ctx.beginPath();

    if (this.distance < mouse.radius - 5) {
      this.size = 1;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(this.x - 3, this.y - 3, this.size / 2.5, 0, Math.PI * 2);
      ctx.arc(this.x + 7, this.y - 1, this.size / 3.5, 0, Math.PI * 2);
    } else if (this.distance <= mouse.radius) {
      this.size = 3;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(this.x - 2, this.y - 2, this.size / 3, 0, Math.PI * 2);
    } else {
      this.size = 6;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(this.x - 1, this.y - 1, this.size / 3, 0, Math.PI * 2);
    }

    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    this.distance = distance;
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
        this.x -= dx / 5;
      }

      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 5;
      }
    }
  }
}

function init() {
  particleArray = [];

  for (let y = 0; y < textCoordinates.height; y++) {
    for (let x = 0; x < textCoordinates.width; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        particleArray.push(new Particle(positionX * 10, positionY * 10));
      }
    }
  }

  // for (let i = 0; i < 500; i++) {
  // 	let x = Math.random() * canvas.width;
  // 	let y = Math.random() * canvas.height;
  // 	particleArray.push(new Particle(x, y));
  // }
}

init();

console.log(particleArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  //connect();

  requestAnimationFrame(animate);
}

animate();

// function connect() {
// 	for (let a = 0; a < particleArray.length; a++) {
// 		for (let b = a; b < particleArray.length; b++) {
// 			let dx = particleArray[a].x - particleArray[b].x;
// 			let dy = particleArray[a].y - particleArray[b].y;
// 			let distance = Math.sqrt(dx * dx + dy * dy);
// 			ctx.strokeStyle = '#2dcc7d';

// 			if (distance < 15) {
// 				ctx.lineWidth = 1;
// 				ctx.beginPath();
// 				ctx.moveTo(particleArray[a].x, particleArray[a].y);
// 				ctx.lineTo(particleArray[b].x, particleArray[b].y);
// 				ctx.stroke();
// 			}
// 		}
// 	}
// }
