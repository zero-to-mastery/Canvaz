var ctx = document.getElementById('small-ac').getContext('2d');

// hexagon
var numberOfSides = 8,
  size = 100,
  Xcenter = 100,
  Ycenter = 100;

ctx.beginPath();
ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

for (var i = 1; i <= numberOfSides; i += 1) {
  ctx.lineTo(
    Xcenter + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
    Ycenter + size * Math.sin((i * 2 * Math.PI) / numberOfSides)
  );
}

ctx.fillStyle = 'red';
ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;
ctx.fill();

ctx.fillStyle = 'white';
ctx.font = '60px Arial';
ctx.fillText('STOP', 20, 120);
