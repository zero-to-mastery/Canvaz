var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

var context = canvas.getContext('2d');

for (let i = 0; i < 10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 70, 0, Math.PI * 2, false);
  context.strokeStyle = 'blue';
  context.stroke();
}

for (let i = 0; i < 10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.rect(x, y, 200, 150);
  context.strokeStyle = 'green';
  context.stroke();
}

for (let i = 0; i < 1; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.moveTo(x, x);
  context.lineTo(x, y);
  context.lineTo(y, y);
  context.strokeStyle = 'red';
  context.closePath();
  context.stroke();
}
