var canvas = document.querySelector('#canvas').getContext('2d'),
  side = 0,
  size = 100,
  x = 100,
  y = 100;

canvas.beginPath();
canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {
  canvas.lineTo(
    x + size * Math.cos((side * 2 * Math.PI) / 6),
    y + size * Math.sin((side * 2 * Math.PI) / 6)
  );
}

canvas.fillStyle = '#333333';
canvas.fill();
