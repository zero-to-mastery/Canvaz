var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var circle = Math.PI * 2;

var cat = {
  x: 100,
  y: 100,
  vx: 1,
  vy: 3,
  draw: function() {

    //body
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, circle, true);
    ctx.arc(this.x, this.y + 20, 15, 0, circle, true);
    ctx.fillStyle = 'black';
    ctx.fill();

    //ears
    ctx.moveTo(this.x - 10, this.y);
    ctx.lineTo(this.x - 10, this.y - 15);
    ctx.lineTo(this.x, this.y);
    ctx.lineTo(this.x + 10, this.y - 15);
    ctx.lineTo(this.x + 10, this.y);
    ctx.fill();

    //eyes
    ctx.beginPath();
    ctx.arc(this.x - 4, this.y - 3, 2, 0, circle, true);
    ctx.arc(this.x + 4, this.y - 3, 2, 0, circle, true);
    ctx.fillStyle = 'yellow';
    ctx.fill();

    //tail
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + 35);
    ctx.lineTo(this.x + 25, this.y + 35);
    ctx.lineWidth = 3;
    ctx.stroke();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255, 225, 255, 0.7)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  cat.draw();
  cat.x += cat.vx;
  cat.y += cat.vy;

  if (cat.y + cat.vy > canvas.height - 30|| cat.y + cat.vy < 10) {
    cat.vy = -cat.vy;
  }
  if (cat.x + cat.vx > canvas.width - 10 || cat.x + cat.vx < 10) {
    cat.vx = -cat.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

cat.draw();
