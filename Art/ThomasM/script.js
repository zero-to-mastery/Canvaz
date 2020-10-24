const canvas = document.querySelector('canvas');

// How many rows of canvas will draw
const SECTIONS = 20;

// Space between a B in HSB value from the next one
const BRIGHTNESS_OFFSET = 3;

// Random hue value
const hue = Math.random() * 360;

function draw() {
  var ctx = canvas.getContext('2d');
  let i = 1;
  while (i <= SECTIONS) {
    ctx.fillStyle = `hsl(${hue}, 80%, ${i * BRIGHTNESS_OFFSET}%)`;
    ctx.fillRect(
      0,
      ((i - 1) * canvasHeight) / SECTIONS,
      canvasWidth,
      canvasHeight / SECTIONS
    );
    i++;
  }
}

const canvasWidth = window.innerWidth / 2;
const canvasHeight = window.innerHeight / 1.4;

canvas.width = canvasWidth;
canvas.height = window.innerHeight / 1.4;
draw();
