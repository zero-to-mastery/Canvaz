const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

hue = Math.random() * 360;
let number = 0;
let scale = 10;

const drawFlower = () => {
  let angle = number * 3.8;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas1.width / 2;
  let positionY = radius * Math.cos(angle) + canvas1.height / 2;

  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number++;
  hue += 0.5;
};

const animate = () => {
  // ctx.clearRect(0,0, canvas1.width, canvas1.height)

  drawFlower();
  if (number > 100) return;
  requestAnimationFrame(animate);
};

animate();
