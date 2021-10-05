const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";

let number = 0;
let scale = 10;

function drawCircles() {
  let angle = number * 0.3;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = "#1C7947";
  ctx.strokeStyle = "#FFFD95";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
}

function animate() {
  //draw each frame
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircles();
  if (number > 100) return;
  requestAnimationFrame(animate);
}
animate();
