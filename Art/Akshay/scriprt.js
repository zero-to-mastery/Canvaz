const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

const colors = [
  '#8CB1DE',
  '#945B47',
  '#927E77',
  '#927E77',
  ' #3C4258',
  '#3B5D38'
];

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

let mouseDown = false;
addEventListener('mousedown', () => {
  mouseDown = true;
});

addEventListener('mouseup', () => {
  mouseDown = false;
});

class DarkMatter {
  constructor(x, y, radius, color, src) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.src = src;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 15;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

let darkMatter;
const init = () => {
  darkMatter = [];
  const canvasWidth = 300 + canvas.width;
  const canvasHeight = 300 + canvas.height;
  for (let i = 0; i < 350; i++) {
    const x = Math.random() * canvasWidth - canvasWidth / 2;
    const y = Math.random() * canvasHeight - canvasHeight / 2;
    const radius = 3 * Math.random();
    const color = colors[Math.floor(Math.random() * colors.length)];
    darkMatter.push(new DarkMatter(x, y, radius, color));
  }
};

let radiant = 0;
let alpha = 1;
const animate = () => {
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(20, 20, 20, ${alpha})`;
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);
  c.rotate(radiant);
  darkMatter.forEach((matter) => {
    matter.update();
  });
  c.restore();
  radiant += 0.003;

  if (mouseDown && alpha >= 0.1) {
    alpha -= 0.05;
  } else if (!mouseDown && alpha < 1) {
    alpha += 0.05;
  }
};

init();
animate();
