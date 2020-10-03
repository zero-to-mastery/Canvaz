const canvas = document.querySelector('canvas');
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerWidth = canvasWidth / 2;
const centerHeight = canvasHeight / 2 - 50;

const c = canvas.getContext('2d');

function Firework() {
  let lines = [];
  for (let i = 0; i < 50; i++) {
    let d = Math.floor(Math.random() * 100) + 300;
    let r = Math.floor(Math.random() * 360);
    let hue = Math.floor(Math.random() * 359) + 1;
    let sat = Math.floor(Math.random() * 99) + 1;
    let light = 80 - Math.floor(Math.random() * 40);
    let linesProp = [d, r, hue, sat, light];
    lines[i] = linesProp;
  }
  this.draw = function () {
    c.beginPath();

    if (d2 - dt >= 0) {
      c.moveTo(centerWidth, centerHeight);
      c.lineTo(
        centerWidth + dt * Math.sin(r2),
        centerHeight + dt * Math.cos(r2)
      );
      c.strokeStyle = 'hsl(' + hue2 + ',' + sat2 + '%,' + light2 + '%)';
      c.closePath();
      c.stroke();
    } else {
      return 1;
    }
  };

  let dt = 0;
  // The dd value is the velocity of the line traveling
  let dd = 10;
  this.update = function () {
    if (dd > 1) {
      dd /= 1.5;
    }
    dt += dd;
    let lineinfo = [];
    let done = 0;
    for (let i = 0; i < 50; i++) {
      if (done != 49) {
        lineInfo = lines[i];
        d2 = lineInfo[0];
        r2 = lineInfo[1];
        hue2 = lineInfo[2];
        sat2 = lineInfo[3];
        light2 = lineInfo[4];

        if (this.draw() === 1) {
          lines[i] = 'done';
          done++;
        }
      } else {
        return 1;
      }
    }
  };

  this.clear = function () {
    dt = 0;
    dd = 10;
    c.clearRect(0, 0, canvasWidth, canvasHeight);
  };
}

function Rectangle(x, y, dy) {
  this.x = x;
  this.y = y;
  this.dy = dy;

  this.draw = function () {
    c.fillStyle = '#248FF5';
    c.fillRect(this.x, this.y, 5, 20);
  };
  this.update = function () {
    if (Math.round(this.y) < Math.round(centerHeight)) {
      this.dy = 0;
    }

    this.y -= this.dy;

    if (this.dy < 5) {
      if (this.dy != 0) {
        this.dy *= 1.01;
      }
    }
    this.draw();
  };
  this.velocity = function () {
    return this.dy;
  };
  this.clear = function () {
    c.clearRect(0, 0, canvasWidth, canvasHeight);
  };
}

const y = canvasHeight - 100;
const x = canvasWidth / 2 - 2.5;
const dy = 8;

let rectangle = new Rectangle(x, y, dy);
let firework = new Firework();

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, canvasWidth, canvasHeight);

  rectangle.update();

  if (rectangle.velocity() === 0) {
    rectangle.clear();

    firework.update();

    if (firework.update() === 1) {
      firework.clear();
      setTimeout(function () {
        rectangle = new Rectangle(x, y, dy);
        firework = new Firework();
      }, 300);
    }
  }
}

animate();
