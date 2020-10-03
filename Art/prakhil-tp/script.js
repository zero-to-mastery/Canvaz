let canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d');
const colorPalette = {
  silver: '#c5ced4',
  blue: '#2091da'
};

const mouse = { x: undefined, y: undefined };
window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

/**
 * RainDrop function, which returns draw and update methods.
 * param {number} x - indicate x cordinate
 * param {number} y - indicate y-cordinate
 * param {number} dx - x integral
 * param {number} dy - y integral
 * returns {object}
 */
const RainDrop = (x, y, dx, dy, radius, color) => {
  const prevSpeed = dx;
  const draw = () => {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI);
    c.moveTo(x - radius, y);
    c.lineTo(x, y - radius * 2);
    c.lineTo(x + radius, y);
    c.fillStyle = color;
    c.fill();
  };

  const update = (minWidth, maxWidth, minHeight, maxHeight) => {
    if (x + radius > maxWidth || x - radius < minWidth) {
      if (y < minHeight + 50) {
        dx = -dx;
      }
    }

    if (y + radius > maxHeight) {
      y = minHeight;
      x = Math.random() * (maxWidth - minWidth) + minWidth;
    }

    if (
      mouse.x - x < 20 &&
      mouse.x - x > -20 &&
      mouse.y - y < 20 &&
      mouse.y - y > -20
    ) {
      x = dx > 0 ? x + 20 : x - 20;
    } else if (dx > 2 * prevSpeed) {
      dx -= 1;
    }

    y += dy;
    x += dx;
    draw();
  };

  return { draw, update };
};

/**
 * Cloud function which returns draw, update and rain methods
 * param {number} x - indicate x cordinate
 * param {number} y - indicate y cordinate
 * param {number} dx - x integral
 * param {number} minCloudWidth - cloud's least x value
 * param {number} maxCloudWidth - cloud's most x value
 * return {object}
 */

const Cloud = (x, y, dx, minCloudWidth, maxCloudWidth) => {
  let rainDrops = [];

  // iife create raindrops.
  (function makeDrops() {
    for (let i = 0; i < 500; i++) {
      const radius = Math.random() * 3 + 1;
      const maxMovingWidth = x + 200;
      const minMovingWidth = x;
      const minMovingHeight = y;
      const maxMovingHeight = window.innerHeight - radius;

      const posX =
        Math.random() * (maxMovingWidth - minMovingWidth) + minMovingWidth;
      const posY =
        Math.random() * (maxMovingHeight - minMovingHeight) + minMovingHeight;
      const dx = Math.random() + 0.1;
      const dy = Math.random() + 0.3;
      const color = `rgba(48, 145, 218, ${Math.random() + 0.5})`;
      const drop = RainDrop(posX, posY, dx, dy, radius, color);
      rainDrops.push(drop);
    }
  })();

  const rain = (...props) => {
    for (let i = 0; i < rainDrops.length; i++) {
      rainDrops[i].update(...props);
    }
  };

  const draw = () => {
    c.beginPath();
    c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 60);
    c.lineTo(x, y + 60);
    c.strokeStyle = colorPalette.silver;
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = colorPalette.blue;
    c.fill();
  };

  const update = () => {
    if (x + 200 > maxCloudWidth || x < minCloudWidth) {
      dx = -dx;
    }

    x += dx;
    draw();
    rain(x, x + 200, y, innerHeight);
  };

  return { draw, update, rain };
};

const cloud1 = Cloud(500, 200, 0.5, 0, window.innerWidth / 2);
const cloud2 = Cloud(1300, 200, 0.5, window.innerWidth / 2, window.innerWidth);

// A recursive animate function which helps to animate plotted objects
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  cloud1.update();
  cloud2.update();
}

animate();
