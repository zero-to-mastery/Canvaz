//initial Configs
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

//Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2 
};

const colors = ['#2185C5', '#7ECEFD', '#0000ff', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

//Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Objects
function Particle (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange (50,120);

    this.lastMouse = {x:x, y:y}
    this.update = () => {
    	const lastPoint = {x:this.x,y:this.y};
    	//Move the particle periodically
    	this.radians += this.velocity;

    	//Drag Effect
    	this.lastMouse.x += (mouse.x - this.lastMouse.x)* 0.05;
    	this.lastMouse.y += (mouse.y - this.lastMouse.y)* 0.05;
    	//circular motion
    	this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    	this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    	this.draw(lastPoint);
    };

  	this.draw = lastPoint => {
    	c.beginPath();
    	c.strokeStyle = this.color;
    	c.lineWidth = this.radius;
    	c.moveTo(lastPoint.x,lastPoint.y);
    	c.lineTo(this.x,this.y);
    	c.stroke();
    	c.closePath();
    	c.closePath();
  };
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 50; i++) {
  	const radius = (Math.random() * 2) + 1;
    particles.push(new Particle(canvas.width/2, canvas.height/2,radius,randomColor(colors)))
  };
  console.log(particles)
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(255,255,255,0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
   particle.update();
  });
}

init();
animate();
