function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillStyle = '#0038b8';

  ctx.fillRect(0, 30, 660, 50);
  ctx.fillRect(0, 400, 660, 50);
  // First triangle
  ctx.beginPath();
  ctx.moveTo(330, 100);
  ctx.lineTo(175, 300);
  ctx.lineTo(485, 300);
  ctx.closePath();
  ctx.fill();

  // Second triangle
  ctx.beginPath();
  ctx.moveTo(330, 380);
  ctx.lineTo(175, 180);
  ctx.lineTo(485, 180);
  ctx.closePath();
  ctx.fill();
}
