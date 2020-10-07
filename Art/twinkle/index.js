// Grab the canvas and context;
const canvas = document.getElementById('skyCanvas');
const ctx = canvas.getContext('2d');
let star_array = [];

function loadNightSky() {
  // Load the stars
  loadStars();

  // Draw the moon
  drawMoon();

  // Draw the stars
  drawFieldOfStars();

  // Load the skyLine
  drawSkyline();
}

function drawMoon() {
  ctx.beginPath();
  ctx.fillStyle = 'rgb(247, 247, 234, .009)';
  ctx.arc(750, 75, 1000, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'rgb(247, 247, 234, .01)';
  ctx.arc(750, 75, 300, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'rgb(247, 247, 234, .02)';
  ctx.arc(750, 75, 100, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'rgb(247, 247, 234, 1.0)';
  ctx.arc(750, 75, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

function loadStars() {
  for (let i = 0; i < 100; i++) {
    star_array.push({
      x: Math.floor(Math.random() * 900),
      y: Math.floor(Math.random() * 500),
      size: Math.floor(Math.random() * 3) + 1
    });
  }
}

function drawFieldOfStars() {
  // In the future get the starts to twinkle
  for (let i = 0; i < star_array.length; i++) {
    let star = star_array[i];
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function drawSkyline() {
  // Break up the skyline
  for (let i = 0; i < 9; i++) {
    let y = Math.floor(Math.random() * (550 - 400 + 1)) + 400;
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(i * 100, y, 100, 300);
  }
}
