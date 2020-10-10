const canvas = document.getElementById('nepalFlag');

const context = canvas.getContext('2d');

function circle(x, y, r, circleFillStart, circleFillEnd, fillColor) {
  width = canvas.width;
  height = canvas.height;

  context.beginPath();
  context.arc(
    width / x,
    height / y,
    r,
    circleFillStart * Math.PI,
    circleFillEnd * Math.PI
  );

  if (fillColor) {
    context.fillStyle = fillColor;
    context.fill();
  }
}

function star(x, y, innerR, outerR, points, fillCol, tilt) {
  var rad = Math.PI / 180;

  var radStep = (rad * (360 / 16)) / 2;
  var radCurrentStep = 0;
  var radTilt = rad * tilt;

  context.beginPath();
  context.moveTo(
    x + Math.sin(radCurrentStep + radTilt) * innerR,
    y + Math.cos(radCurrentStep + radTilt) * innerR
  );
  for (var i = 0; i < points; i++) {
    radCurrentStep += radStep;
    context.lineTo(
      x + Math.sin(radCurrentStep + radTilt) * outerR,
      y + Math.cos(radCurrentStep + radTilt) * outerR
    );
    radCurrentStep += radStep;
    context.lineTo(
      x + Math.sin(radCurrentStep + radTilt) * innerR,
      y + Math.cos(radCurrentStep + radTilt) * innerR
    );
  }
  context.closePath();
  if (fillCol) {
    context.fillStyle = fillCol;
    context.fill();
  }
}

function drawTriangle() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#FFFFFF';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.moveTo(20, 20);
  context.lineTo(20, 150);
  context.lineTo(200, 150);
  context.closePath();

  context.lineWidth = 10;
  context.strokeStyle = '#003893';
  context.stroke();

  context.fillStyle = '#DC143C';
  context.fill();

  context.beginPath();
  context.moveTo(20, 160);
  context.lineTo(350, 350);
  context.lineTo(20, 350);
  context.closePath();

  context.lineWidth = 10;
  context.strokeStyle = '#003893';
  context.stroke();

  context.fillStyle = '#DC143C';
  context.fill();
}

function drawFlag() {
  drawTriangle();
  star(90, 270, 25, 35, 16, '#FFFF', 10);
  circle(9, 7, 20, 0, 2, '##ffff');
  circle(9, 8, 20, 0, 2, '#DC143C');
}

drawFlag();
