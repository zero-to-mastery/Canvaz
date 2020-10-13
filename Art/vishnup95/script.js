function draw() {
  const canvas = document.getElementById('newCanvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(250, 250, 20, 0, 2 * Math.PI, false);
  ctx.strokeStyle = '#ae99d2';
  ctx.lineWidth = 1;
  ctx.fillStyle = 'teal';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.bezierCurveTo(500, 280, 400, 120, 260, 228);
  ctx.bezierCurveTo(400, 50, 100, 120, 240, 228);
  ctx.bezierCurveTo(50, 150, 100, 350, 232, 260);
  ctx.bezierCurveTo(75, 350, 280, 400, 250, 270);
  ctx.bezierCurveTo(300, 400, 450, 280, 270, 250);
  ctx.fillStyle = '#ae99d2';
  ctx.fill();

  //Leaf
  ctx.quadraticCurveTo(500, 280, 490, 490);
  ctx.lineWidth = 2;

  ctx.stroke();
  let region = new Path2D();
  region.moveTo(470, 370);
  region.quadraticCurveTo(400, 320, 350, 400);
  region.moveTo(470, 370);
  region.quadraticCurveTo(400, 460, 350, 400);
  region.quadraticCurveTo(400, 380, 350, 400);
  ctx.fillStyle = 'lightgreen';
  ctx.fill(region, 'evenodd');
  ctx.stroke();
  ctx.globalCompositeOperation = 'destination-over';
  ctx.fillStyle = 'rgba(255, 255, 0, 0.2)';

  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

draw();
