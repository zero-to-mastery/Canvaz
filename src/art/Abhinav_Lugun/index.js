var canvas = document.getElementById('canvas');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = '#1E90FF';
  ctx.moveTo(200, 150);
  ctx.lineTo(200, 350);
  ctx.lineTo(450, 450);
  ctx.lineTo(450, 250);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#00416A';
  ctx.moveTo(450, 250);
  ctx.lineTo(450, 450);
  ctx.lineTo(700, 350);
  ctx.lineTo(700, 150);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#ADD8E6';
  ctx.moveTo(200, 150);
  ctx.lineTo(450, 250);
  ctx.lineTo(700, 150);
  ctx.lineTo(450, 70);
  ctx.fill();
}
