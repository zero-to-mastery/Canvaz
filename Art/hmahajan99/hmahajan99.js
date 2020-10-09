const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const PI = Math.PI;

function drawSpiral(
  originX,
  originY,
  stepSize,
  spiralSize,
  lineWidth,
  lineColor,
  lineAngle
) {
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.moveTo(originX, originY);

  var increment = (lineAngle * PI) / stepSize;
  var angle = increment;

  while (angle < spiralSize * PI) {
    var newX = originX + angle * Math.cos(angle);
    var newY = originY + angle * Math.sin(angle);

    angle = angle + increment;

    ctx.lineTo(newX, newY);
  }
  return ctx.stroke();
}

drawSpiral(150, 70, 25, 20, 2, '#000', 7);
