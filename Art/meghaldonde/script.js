function greet() {
  // get the canvas element using the DOM
  var canvas = document.getElementById('mycanvas');
  var myname = document.getElementById('myName').value;
  var mylan = document.getElementById('myLanguage').value;

  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext) {
    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    ctx.font = '30px Times New Roman';
    ctx.fillStyle = 'black';

    ctx.fillText(mylan + ' ' + myname + ' !', 5, 130);
  } else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
  drawHappyFace(canvas, {
    fill: '#FFFF00'
  });
}

function drawFace(canvas, opts) {
  var ctx = canvas.getContext('2d');
  ctx.save();
  ctx.lineWidth = opts.radius * 0.075;
  ctx.strokeStyle = opts.lineColor;
  ctx.beginPath();
  ctx.arc(opts.x, opts.y, opts.radius, opts.startAngle, opts.endAngle);
  ctx.stroke();
  ctx.fillStyle = opts.fill;
  ctx.fill();
  ctx.restore();
}

function drawSmile(canvas, opts, flipSmile) {
  var ctx = canvas.getContext('2d');
  var radius = 40 * opts.radius * 0.0125;
  var x = opts.x;
  var y, startAngle, endAngle;

  if (flipSmile) {
    y = opts.y + opts.radius * 0.7;
    startAngle = -Math.PI * 0.85; //Math.PI * 0.1;
    endAngle = -0.5; //-Math.PI * 1.1;
  } else {
    y = opts.y + opts.radius * 0.1;
    startAngle = Math.PI * 0.1;
    endAngle = -Math.PI * 1.1;
  }

  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.lineWidth = opts.radius * 0.1;

  ctx.strokeStyle = opts.lineColor;
  ctx.stroke();
  ctx.restore();
}

function drawEyes(canvas, opts) {
  var xOffset = opts.radius * 0.5;
  var radius = opts.radius * 0.15;

  drawEye(canvas, opts, xOffset, 0, radius); // Left
  drawEye(canvas, opts, -xOffset, 0, radius); // Right
}

function drawEye(canvas, opts, centerX, centerY, radius) {
  var ctx = canvas.getContext('2d');

  // Save state
  ctx.save();

  // Translate context so height is 1/3'rd from top of enclosing circle
  ctx.translate(opts.x, opts.y - opts.radius / 3);

  // Scale context horizontally by 50%
  ctx.scale(0.5, 1);

  // Draw circle which will be stretched into an oval
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

  // Apply styling
  ctx.fillStyle = opts.lineColor;
  ctx.fill();
  ctx.lineWidth = radius * 0.75;
  ctx.strokeStyle = opts.lineColor;
  ctx.stroke();

  // Restore to original state
  ctx.restore();
}

function drawHappyFace(canvas, opts, flipSmile) {
  opts = opts || {};

  var defaultRadius = 48;
  var options = {
    x: opts.x || defaultRadius / 0.9,
    y: opts.y || defaultRadius / 0.9,
    radius: opts.radius || defaultRadius,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    fill: opts.fill || 'yellow',
    lineColor: opts.lineColor || 'black'
  };

  drawFace(canvas, options);
  drawEyes(canvas, options);
  drawSmile(canvas, options, flipSmile);
}
