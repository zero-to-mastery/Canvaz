let canvas = document.querySelector('canvas');
canvas.height = 600;
canvas.width = 600;
let c = canvas.getContext('2d');

let x1 = 0;
let y1 = canvas.height;
let x2 = canvas.width / 2;
let y2 = 0;
let x3 = canvas.width;
let y3 = canvas.width;

drawTriangle(x1, y1, x2, y2, x3, y3);
drawSierpinski(x1, y1, x2, y2, x3, y3);

function drawTriangle(x1, y1, x2, y2, x3, y3) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.lineTo(x3, y3);
  c.lineTo(x1, y1);
  c.stroke();
}

function drawSierpinski(x1, y1, x2, y2, x3, y3, d = 0) {
  if (d > 6) {
    return;
  }

  //middle
  let mdlx1 = (x1 + x2) / 2;
  let mdly1 = (y1 + y2) / 2;
  let mdlx2 = (x2 + x3) / 2;
  let mdly2 = (y2 + y3) / 2;
  let mdlx3 = (x1 + x3) / 2;
  let mdly3 = (y1 + y3) / 2;

  drawTriangle(mdlx1, mdly1, mdlx2, mdly2, mdlx3, mdly3);

  d += 1;

  drawSierpinski(mdlx1, mdly1, x2, y2, mdlx2, mdly2, d);

  drawSierpinski(x1, y1, mdlx1, mdly1, mdlx3, mdly3, d);

  drawSierpinski(mdlx3, mdly3, mdlx2, mdly2, x3, y3, d);
}
