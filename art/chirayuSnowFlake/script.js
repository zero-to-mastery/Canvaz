const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxLevel = Math.floor(Math.random() * 3) + 3;
// const maxLevel = 5
const branches = 4;

c.translate(canvas.width / 2, canvas.height / 2);

const angle = Math.PI * 2 * 0.85;

function drawFlake(level) {
  if (level > maxLevel) {
    return;
  }

  c.strokeStyle = "white";
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(0, 0);
  c.lineTo(200, 0);
  c.stroke();

  for (let i = 0; i < branches; i++) {
    c.save();
    c.translate((400 * i) / (branches + 1), 0);
    c.scale(0.5, 0.5);
    c.save();

    c.rotate(angle);
    drawFlake(level + 1);
    c.restore();
    c.save();

    c.rotate(-angle);
    drawFlake(level + 1);
    c.restore();

    c.restore();
  }
}
for (let i = 0; i < 5; i++) {
  drawFlake(0);
  c.rotate((Math.PI * 2) / 5);
}
