// select the canvas
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

// a function to draw circle
function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

// function to draw ellipse
function drawEllipse(cx, cy, rx, ry, color) {
  ctx.fillStyle = color;
  ctx.save(); // save state
  ctx.beginPath();

  ctx.translate(cx - rx, cy - ry);
  ctx.scale(rx, ry);
  ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);

  ctx.restore(); // restore to original state
  ctx.fill();
}

// a function to draw rectangle
function drawRect(x, y, w, h, color, angle) {
  if (angle) {
    ctx.rotate((Math.PI / 180) * angle);
  }
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// function to draw text
function drawText(text, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.font = `${size} Kaushan Script`;
  ctx.fillText(text, x, y);
}

function drawLeftEar() {
  ctx.fillStyle = '#75934E';
  ctx.beginPath();
  ctx.moveTo(100, 60);
  ctx.bezierCurveTo(100, 150, 250, 150, 250, 150);
  ctx.lineTo(250, 60);

  ctx.closePath();
  ctx.fill();
}

function drawInnerLeftEar() {
  ctx.fillStyle = '#F7B89D';
  ctx.beginPath();
  ctx.moveTo(110, 70);
  ctx.bezierCurveTo(120, 140, 240, 130, 240, 140);
  ctx.lineTo(240, 70);
  ctx.closePath();
  ctx.fill();
}

function drawInnerRightEar() {
  ctx.fillStyle = '#F7B89D';
  ctx.beginPath();
  ctx.moveTo(340, 70);
  ctx.lineTo(490, 70);
  ctx.bezierCurveTo(490, 140, 340, 140, 340, 140);
  ctx.closePath();
  ctx.fill();
}

function drawRightEar() {
  ctx.fillStyle = '#75934E';

  ctx.beginPath();
  ctx.moveTo(350, 60);
  ctx.lineTo(500, 60);
  ctx.bezierCurveTo(500, 150, 350, 150, 350, 150);

  ctx.closePath();
  ctx.fill();
}

function drawSmile() {
  ctx.beginPath();
  ctx.moveTo(280, 140);
  ctx.bezierCurveTo(280, 130, 320, 130, 320, 140);
  //   ctx.lineTo(500, 60);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#586d3c';
  ctx.stroke();
}

drawLeftEar();
drawRightEar();
drawInnerLeftEar();
drawInnerRightEar();

// drawCircle(270, 80, 20, "black");
// drawCircle(330, 80, 20, "black");

// body
drawRect(210, 180, 180, 180, '#966c53');

// scarf
drawRect(210, 160, 120, 50, '#6C4D3F');
drawRect(330, 160, 60, 50, '#775546');

//fingers
drawCircle(180, 280, 25, '#75934E'); //310
drawCircle(420, 280, 25, '#75934E'); //310

// hands
drawRect(155, 180, 50, 100, '#966c53');
drawRect(395, 180, 50, 100, '#966c53');

// sleeves
drawRect(155, 260, 50, 20, '#6C4D3F');
drawRect(395, 260, 50, 20, '#6C4D3F');

// HEAD
// >> Skull
drawEllipse(300, 100, 100, 80, '#75934E');
//nose
drawCircle(300, 105, 7, '#586d3c');

// smile
drawSmile();
// >> Left Eye
drawEllipse(260, 80, 25, 15, 'black');
// >> Right Eye
drawEllipse(340, 80, 25, 15, 'black');
drawCircle(250, 75, 7, 'white');
drawCircle(330, 75, 7, 'white');

drawText('Baby Yoda', 193, 450, '48px', '#75934E');
