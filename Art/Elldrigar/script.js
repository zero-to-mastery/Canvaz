const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.globalCompositeOperation = 'destination-over';

let number = 0;
let scale = 12;

const drawFlower = () => {
  let angle = number * 3.5;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  context.fillStyle = `rgb(${number}, ${number}, ${number * 3})`;
  context.strokeStyle = '#326ebb';
  context.lineWidth = 2;
  context.beginPath();
  context.arc(positionX, positionY, number, 0, Math.PI * 2);
  context.closePath();
  context.fill();
  context.stroke();
  number++;
};

const animate = () => {
  drawFlower();
  if (number > 170) return;
  requestAnimationFrame(animate);
};

animate();
