function distanceBetween(point1, point2) {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
  );
}
function angleBetween(point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

let el = document.getElementById('c');
let ctx = el.getContext('2d');
ctx.fillStyle = 'black';
ctx.strokeStyle = 'gray';
let isDrawing, lastPoint;
ctx.globalCompositeOperation = 'destination-over';

el.onmousedown = function (e) {
  isDrawing = true;
  lastPoint = { x: e.clientX, y: e.clientY };
};

el.onmousemove = function (e) {
  if (!isDrawing) return;

  const currentPoint = { x: e.clientX, y: e.clientY };
  const dist = distanceBetween(lastPoint, currentPoint);
  const angle = angleBetween(lastPoint, currentPoint);

  for (let i = 0; i < dist; i += 5) {
    x = lastPoint.x + Math.sin(angle) * i - 25;
    y = lastPoint.y + Math.cos(angle) * i - 25;
    ctx.beginPath();
    ctx.arc(x + 10, y + 10, 20, false, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  lastPoint = currentPoint;
};

el.onmouseup = function () {
  isDrawing = false;
};
