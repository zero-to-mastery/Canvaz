const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if (len < 10) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  drawTree(0, -len, len * 0.78, angle + 17, branchWidth * 0.6);
  drawTree(0, -len, len * 0.78, angle - 17, branchWidth * 0.6);

  ctx.restore();
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawTree(
    canvas.width / 2,
    canvas.height - 100,
    120,
    0,
    32,
    "brown",
    "#f78922"
  );
});

window.onload = function () {
  drawTree(
    canvas.width / 2,
    canvas.height - 100,
    120,
    0,
    32,
    "brown",
    "#f78922"
  );
};
