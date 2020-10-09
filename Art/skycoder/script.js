var c = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = c.getContext('2d');
ctx.font = '100px Roboto';
ctx.color = 'white';
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop('0', ' #a7ff83');
gradient.addColorStop('0.2', '#17b978');
gradient.addColorStop('0.4', '#fc5185');
gradient.addColorStop('0.6', '#071a52');
gradient.addColorStop('1.0', '#fc5185');
// Fill with gradient
ctx.fillStyle = gradient;
for (let index = 100; index <= 800; index += 100) {
  ctx.strokeText('Think Twice, Code Once', 450, index);
}
