const canvas = document.querySelector('canvas');
const div = document.querySelector('div');

canvas.width = div.offsetWidth;
canvas.height = div.offsetHeight;

const element = canvas.getContext('2d');

element.fillRect(20, 10, 10, 250);

let x = 20;
let y = 10;
let dx = 5;
let dy = 1;

function animate() {
  requestAnimationFrame(animate);
  setInterval(() => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    element.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
    element.fill();
  }, 10);
  element.beginPath();
  element.fillRect(x, y, 10, 250);

  if (x > div.offsetWidth || x < 0) {
    dx = -dx;
  }

  if (y > div.offsetHeight - 250 || y < 0) {
    dy = -dy;
  }
  // y ++;
  x += dx;
  y += dy;
}

animate();

setInterval(() => {
  element.clearRect(0, 0, div.offsetWidth, div.offsetHeight);
}, 5000);
