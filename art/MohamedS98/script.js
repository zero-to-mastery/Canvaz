const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");
//take all  window
ctx.canvas.width = window.innerWidth - 5;
ctx.canvas.height = window.innerHeight - 5;

var raf;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

var balls = [];

for (let x = 0; x < 200; x++) {
  //Generate Random X, Y coordinates...
  let randX = Math.floor(Math.random() * 2000);
  let randY = Math.floor(Math.random() * 2000);

  let randWidth = Math.floor(Math.random() * 50);
  //Generate Random X, Y coordinates...
  let randRed = Math.floor(Math.random() * 255);
  let randGreen = Math.floor(Math.random() * 255);
  let randBlue = Math.floor(Math.random() * 255);

  let randXVelocity = Math.floor(Math.random() * 25);
  let randYVelocity = Math.floor(Math.random() * 25);
  
  let randColor = rgbToHex(randRed, randGreen, randBlue);
  
  var ball = {
    x: randX,
    y: randY,
    vx: randXVelocity,
    vy: randYVelocity,
    radius: randWidth,
    color: randColor,
    draw: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    },
  };
  balls.push(ball);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < 200; x++) {
    let ball = balls[x];
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
      ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }
  }
  raf = window.requestAnimationFrame(draw);
}

draw();
