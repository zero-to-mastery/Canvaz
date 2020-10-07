const canvas = document.getElementById('canvas');
const width = (canvas.width = window.innerWidth * 0.75);
const height = (canvas.height = window.innerHeight * 0.75);
const ctx = canvas.getContext('2d');

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

window.onmousemove = function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

//generates color
function generateColor() {
  let list = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += list[Math.ceil(Math.random() * 15)];
  }
  return color;
}

let linesList = [];

window.onload = function myfunction() {
  for (let i = 0; i < 10; i++) {
    let initialLine = new line(innerWidth / 2, innerHeight / 2, 5, 'red', 2);
    linesList.push(initialLine);
  }

  ctx.lineWidth = '2';
  ctx.globalAlpha = 0.5;
  resize();
  anim();
};

window.onresize = function () {
  resize();
};

function resize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  let quantityOfLines = 50;
  for (let i = 0; i < quantityOfLines; i++) {
    linesList[i] = new line(
      innerWidth / 2,
      innerHeight / 2,
      2,
      generateColor(),
      0.01
    );
  }
  //a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
  //a[0].draw();
}

function line(width, height, lineThickness, color, spinningSpeed) {
  this.width = width;
  this.height = height;
  this.lineThickness = lineThickness;
  this.color = color;
  this.theta = Math.random() * Math.PI * 2; //if theta would be 0 then all line would start at the same position
  this.speed = spinningSpeed;
  this.size = Math.random() * 150;

  this.draw = function () {
    const ls = {
      x: this.width,
      y: this.height
    };
    this.theta += this.speed;
    this.width = mouse.x + Math.cos(this.theta) * this.size;
    this.height = mouse.y + Math.sin(this.theta) * this.size;
    ctx.beginPath();
    ctx.lineWidth = this.lineThickness;
    ctx.strokeStyle = this.color;
    ctx.moveTo(ls.x, ls.y);
    ctx.lineTo(this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  };
}

function anim() {
  requestAnimationFrame(anim);
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  linesList.forEach(function (e) {
    e.draw();
  });
}
