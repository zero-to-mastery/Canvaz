var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var gradient = c.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0', 'magenta');
gradient.addColorStop('0.2', 'yellow');
gradient.addColorStop('0.5', 'teal');
gradient.addColorStop('1.0', 'red');

c.font = '800 10vw Impact';
c.textAlign = 'center';
c.fillStyle = gradient;
c.textBaseline = 'middle';
c.fillText('HACKTOBERFEST', canvas.width / 2, canvas.height / 2);

txt = 'HACKTOBERFEST';
txtWidth = c.measureText(txt).width;
screenWidth = window.innerWidth;
screenHeight = window.innerHeight;
circleWidth = (screenWidth - txtWidth) / 2 - 50;
circleHeight = (screenHeight - 250) / 2 - 50;

function animate() {
  requestAnimationFrame(animate);

  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var colorA = Math.floor(Math.random() * 256);
  var colorB = Math.floor(Math.random() * 256);
  var colorC = Math.floor(Math.random() * 256);

  if (
    x < circleWidth ||
    x > screenWidth - circleWidth ||
    y < circleHeight ||
    y > screenHeight - circleHeight
  ) {
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `rgba(${colorA}, ${colorB}, ${colorC}, 0.7)`;
    c.stroke();
    c.fillStyle = `rgba(${colorA}, ${colorB}, ${colorC}, 0.7)`;
    c.fill();
  }
}

animate();
