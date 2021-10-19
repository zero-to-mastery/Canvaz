var c = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = c.getContext('2d');
ctx.font = '100px Harrington';
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop('0', ' magenta');
gradient.addColorStop('0.2', 'blue');
gradient.addColorStop('0.4', 'red');
gradient.addColorStop('0.6', 'green');
gradient.addColorStop('1.0', 'purple');
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText('Welcome To Hacktoberfest 2020', 10, 90);
