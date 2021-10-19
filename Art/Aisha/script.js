var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var particlesArray = [];
var particlesOnScreen = 500;
var w, h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
  return min + Math.random() * (max - min + 1);
}

function creatingParticles() {
  for (var i = 0; i < particlesOnScreen; i++) {
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      opacity: Math.random(),
      speed: random(5, -1),
      speed: random(-1, -5),
      r: random(0.5, 5.5)
    });
  }
}

function drawP() {
  for (var i = 0; i < particlesArray.length; i++) {
    var gradient = ctx.createRadialGradient(
      particlesArray[i].x,
      particlesArray[i].y,
      0,
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].r
    );

    gradient.addColorStop(
      0,
      'rgba(255, 255, 255,' + particlesArray[i].opacity + ')'
    );
    gradient.addColorStop(
      0.8,
      'rgba(0, 0, 0,' + particlesArray[i].opacity + ')'
    );
    gradient.addColorStop(
      1,
      'rgba(255, 255, 255,' + particlesArray[i].opacity + ')'
    );

    ctx.beginPath();
    ctx.arc(
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].r,
      0,
      Math.PI,
      false
    );

    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 20;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 20;
    ctx.shadowColor = 'white';
  }
}

function moveParticles() {
  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speed;
    particlesArray[i].y += particlesArray[i].speed;

    if (particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -50;
    }
  }
}

function makeParticles() {
  ctx.clearRect(0, 0, w, h);
  drawP();
  moveParticles();
}

setInterval(makeParticles, 100);
creatingParticles();
