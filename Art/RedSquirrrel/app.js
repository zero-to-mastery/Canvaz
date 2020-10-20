const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

hue = Math.random() * 360;

let number = 0;
let scale = 10;

function drawFlower() {
  let angle = number * 0.5;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number++;
  hue++;
}

function drawFlowerLeft() {
  let angle = number * 0.5;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 50, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
  hue++;
}

function animate() {
  drawFlowerLeft();
  drawFlower();
  if (number > 1800) return;
  requestAnimationFrame(animate);
}

animate();

const text = ['HACKTOBERFEST IS FUNNY !!!'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 400);
})();
