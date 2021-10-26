const canvas = document.querySelector("canvas");
const generateButton = document.querySelector(".tree-generator");
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  c.beginPath();
  c.save();
  c.strokeStyle = color1;
  c.fillStyle = color2;
  c.lineWidth = branchWidth;
  c.translate(startX, startY);
  c.rotate((angle * Math.PI) / 180);
  c.moveTo(0, 0);
  c.lineTo(0, -len);
  c.stroke();

  if (len < 3) {
    c.restore();
    return;
  }

  drawTree(0,-len, len * 0.75, angle + 15, branchWidth, "brown" , "green");
  drawTree(0,-len, len * 0.75, angle - 15, branchWidth, "pink" , "green");
  

  c.restore();
}

drawTree(canvas.width / 2, canvas.height - 80, 120, 0, 2, "brown", "green");
