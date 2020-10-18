/*
  recreating my old drawing from khan a.
*/

// positions
let xPos = 0;
let yPos = 200;
let inPos = 50;
let xStarL = 200;
let xStarC = 200;
let xStarR = 200;
let yStars = 500;
let expRad = 50;
let expH = 0;

const canvas = document.querySelector('canvas');
const button = document.querySelector('button');
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext && canvas.getContext('2d');

function star(color, size, xPos, yPos) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.ellipse(xPos, yPos, size, size, 0, Math.PI * 2, 0, false);
  ctx.fill();
}

function draw() {
  // clear canvas
  ctx.clearRect(0, 0, 400, 400);
  // background
  ctx.fillStyle = 'rgb(75, 75, 85)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // explosion
  ctx.beginPath();
  ctx.fillStyle = 'rgb(165, 210, 255)';
  ctx.ellipse(200, 400, expRad, expRad, 0, Math.PI, 0, false);
  ctx.fill();
  ctx.fillStyle = 'rgb(175,255,255)';
  ctx.fillRect(150, 400, 100, expH);
  // input
  ctx.fillStyle = 'rgb(255, 99, 71)';
  ctx.fillRect(20, 40, 350, 50);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(inPos + 40, 45, 20, 25);
  ctx.beginPath();
  ctx.moveTo(inPos + 30, 65);
  ctx.lineTo(inPos + 50, 85);
  ctx.lineTo(inPos + 70, 65);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(inPos + 80, 55);
  ctx.lineTo(inPos + 100, 45);
  ctx.lineTo(inPos + 120, 65);
  ctx.lineTo(inPos + 100, 75);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(inPos + 90, 75);
  ctx.lineTo(inPos + 120, 85);
  ctx.lineTo(inPos + 120, 55);
  ctx.fill();
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(inPos + 135, 55, 25, 20);
  ctx.beginPath();
  ctx.moveTo(inPos + 160, 45);
  ctx.lineTo(inPos + 180, 65);
  ctx.lineTo(inPos + 160, 85);
  ctx.fill();
  ctx.font = '40px sans-serif';
  ctx.fillText('+ P', inPos + 190, 80);
  // first wave of stars
  const firstWave = 'rgb(10, 105, 195)';
  star(firstWave, 10, xStarL, yStars);
  star(firstWave, 10, xStarC, yStars);
  star(firstWave, 10, xStarR, yStars);
  //floor
  ctx.beginPath();
  ctx.fillStyle = 'rgb(170, 195, 80)';
  ctx.ellipse(200, 410, 200, 80, 0, Math.PI, 0, false);
  ctx.fill();
  // second explosion
  ctx.beginPath();
  ctx.fillStyle = 'rgb(220, 230, 115)';
  ctx.ellipse(200, 800, expRad + 200, expRad + 200, 0, Math.PI, 0, false);
  ctx.fill();
  //hadoken
  ctx.fillStyle = 'rgb(10, 105, 195)';
  ctx.beginPath();
  ctx.moveTo(xPos - 80, yPos - 30);
  ctx.lineTo(xPos, yPos - 55);
  ctx.lineTo(xPos, yPos + 50);
  ctx.moveTo(xPos - 80, yPos);
  ctx.lineTo(xPos, yPos - 55);
  ctx.lineTo(xPos, yPos + 55);
  ctx.moveTo(xPos - 80, yPos + 30);
  ctx.lineTo(xPos, yPos - 55);
  ctx.lineTo(xPos, yPos + 55);
  ctx.fill();
  ctx.fillStyle = 'rgb(10, 105, 195)';
  ctx.beginPath();
  ctx.ellipse(xPos, yPos, 50, 60, 0, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.fillStyle = 'rgb(165, 210, 255)';
  ctx.beginPath();
  ctx.ellipse(xPos, yPos, 40, 50, 0, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.ellipse(xPos + 10, yPos, 20, 35, 0, Math.PI * 2, 0, false);
  ctx.fill();
  // second wave of stars
  const secondWave = 'rgb(255,255,255)';
  star(secondWave, 25, xStarL, yStars + 100);
  star(secondWave, 25, xStarC, yStars + 100);
  star(secondWave, 25, xStarR, yStars + 100);
}

function update(dt) {
  xPos += 200 * dt;
  yStars -= 200 * dt;
  xStarL -= 70 * dt;
  xStarR += 70 * dt;
  expRad += 200 * dt;
  expH -= 350 * dt;
}

let secondsPassed = 0;
let oldTimeStamp = 0;
let time = 0;

function gameLoop(timeStamp) {
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;
  update(secondsPassed);
  draw();
  Date.now() - time < 6000 && window.requestAnimationFrame(gameLoop);
}

time = Date.now();
gameLoop(Date.now());

button.addEventListener('click', () => {
  time = Date.now();
  window.cancelAnimationFrame(gameLoop);
  xPos = 0;
  yPos = 200;
  inPos = 50;
  xStarL = 200;
  xStarC = 200;
  xStarR = 200;
  yStars = 500;
  expRad = 50;
  expH = 0;
  gameLoop(Date.now());
});
