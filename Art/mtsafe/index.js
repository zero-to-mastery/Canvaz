const c = document.getElementById('canvas');
var ctx = null;
if (c.getContext) ctx = c.getContext('2d');
const vh = (c.height = window.innerHeight);
const vw = (c.width = window.innerWidth);
const margin = 15;
const gitSize = 55;
var columns = (vw - 2 * margin) / gitSize;
var gitDropYs = [];
for (var x = 0; x < columns; x++) gitDropYs[x] = 0;

const gitBranch = (x, y) => {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#f0f8ff';
  ctx.moveTo(x + 5, y + 5);
  ctx.arc(x, y + 5, 5, 0, Math.PI * 2, true); // main end
  ctx.moveTo(x + 5, y + 45);
  ctx.arc(x + 0, y + 45, 5, 0, Math.PI * 2, true); // main begin
  ctx.moveTo(x + 30, y + 5);
  ctx.arc(x + 25, y + 10, 5, 0, Math.PI * 2, true); // new branch
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(x, y + 10);
  ctx.lineTo(x, y + 40);
  ctx.moveTo(x, y + 40);
  ctx.bezierCurveTo(x, y + 25, x + 25, y + 40, x + 25, y + 15);
  ctx.stroke();
};

function drawMatrix() {
  ctx.fillStyle = 'rgba(32, 18, 48, 0.05)';
  ctx.fillRect(0, 0, vw, vh);
  for (var x = 0; x < gitDropYs.length; x++) {
    gitBranch(x * gitSize + margin, gitDropYs[x] * gitSize + margin);
    if (++gitDropYs[x] * gitSize > vh && Math.random() > 0.975)
      gitDropYs[x] = 0;
  }
}
setInterval(drawMatrix, 33);
