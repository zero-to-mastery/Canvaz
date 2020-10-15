const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const backgroundColor = '#030319';
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

const maxStarRadius = 3.5;

function createStars(width, height, spacing) {
  const stars = [];

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const star = {
        x: x + randomInt(spacing),
        y: y + randomInt(spacing),
        r: Math.random() * maxStarRadius
      };
      stars.push(star);
    }
  }
  return stars;
}

function fillCircle(ctx, x, y, r, fillStyle) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function render() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  stars.forEach(function (star) {
    const x = star.x;
    const y = star.y;
    const r = star.r;
    fillCircle(ctx, x, y, r, 'rgb(255, 255, 255)');
  });
}

const stars = createStars(width, height, 30);
render();
