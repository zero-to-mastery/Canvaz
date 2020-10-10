var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.width = window.screen.width;
canvas.height = window.screen.height;

var context = canvas.getContext('2d');

var end_angle = 0;
var i = 0;
var colors = ['red', 'green', 'black', 'yellow'];
window.requestAnimationFrame(function loop() {
  end_angle += (2 * Math.PI) / 100;
  if (end_angle > 2 * Math.PI) {
    end_angle = 0;
    i++;
    if (i > 3) i = 0;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '48px serif';
  context.strokeText(end_angle.toString(), 100, 100);

  context.fillStyle = colors[i]; // 'red';
  context.beginPath();
  context.arc(200, 220, 100, 0, end_angle, 0);
  context.fill();

  window.requestAnimationFrame(loop);
});
