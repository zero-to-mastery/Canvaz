const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4
};

function drawball() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = '#D0035A';
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawball();

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1;
  }

  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();
