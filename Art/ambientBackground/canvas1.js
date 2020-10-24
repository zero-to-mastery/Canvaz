let canvas = document.getElementById('main');
let width = (canvas.width = innerWidth);
let height = (canvas.height = innerHeight);
let ctx = canvas.getContext('2d');
let pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
// ctx.filter = 'blur(4px)'
// ctx.fillStyle = 'rgb(200, 0, 0)';
//     ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'rgba(0, 0, 0, 1)';
// ctx.fillRect(35, 35, 80, 80);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(47, 47, 56, 56);

// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
// ctx.stroke();

// Circles Moving

let x = Math.random() * width;
let y = Math.random() * height;
let velX = 3;
let velY = 3;
// let color =  `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},1)`;
let ani = function () {
  requestAnimationFrame(ani);
  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x + 100, y + 200, 30, 0, Math.PI * 2, false);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x + 150, y + 80, 30, 0, Math.PI * 2, false);
  ctx.fill();

  x += velX;
  y += velY;
  if (x > width - 30 || x < 30) {
    velX = -velX;
    color = `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},1)`;
  }
  if (y > height - 30 || y < 30) {
    velY = -velY;
    color = `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},1)`;
  }
};
// ani();
// Object Oriented Approach

const COLORS = [
  { r: 229, g: 50, b: 130 },
  { r: 231, g: 112, b: 68 },
  { r: 245, g: 222, b: 214 },
  { r: 163, g: 190, b: 216 },
  { r: 47, g: 89, b: 167 },
  { r: 24, g: 57, b: 141 }
];

let colorC = 0;
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function isMobile() {
  if (innerWidth < 700) {
    return 300;
  } else {
    return 800;
  }
}

let maxRadii = isMobile();

function Circle(x, y, Velx, Vely, radius, rgb) {
  this.X = x;
  this.Y = y;
  this.VelX = Velx;
  this.VelY = Vely;
  this.Radius = radius;
  this.RGB = rgb;
}
Circle.prototype.draw = function () {
  ctx.beginPath();

  const g = ctx.createRadialGradient(
    this.X,
    this.Y,
    this.Radius * 0.01,
    this.X,
    this.Y,
    this.Radius
  );
  let rgb = this.RGB;
  g.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
  g.addColorStop(0.02, `rgba(${rgb.r},${rgb.g},${rgb.b},1)`);

  ctx.fillStyle = g;
  ctx.arc(this.X, this.Y, this.Radius, 0, Math.PI * 2, false);
  ctx.fill();
};
Circle.prototype.Move = function () {
  // console.log(1);
  if (this.X >= width || this.X <= 0) {
    // this.Color = `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},1)`;
    this.VelX = -this.VelX;
  }
  if (this.Y >= height || this.Y <= 0) {
    // this.Color = `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},1)`;
    this.VelY = -this.VelY;
  }
  this.X += this.VelX;
  this.Y += this.VelY;
};
let circles = [];

for (let i = 0; i < 20; i++) {
  let circOjb = new Circle(
    random(maxRadii, width - maxRadii),
    random(maxRadii, height - maxRadii),
    Math.floor(Math.random() * 5 + 1) - 3,
    Math.floor(Math.random() * 5 + 1) - 3,
    300,
    COLORS[colorC]
  );
  if (++colorC >= COLORS.length) colorC = 0;
  circles.push(circOjb);
}

function animation() {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, width, height);
  circles.forEach(function (circObj) {
    circObj.Move();
    circObj.draw();
  });
}
animation();
