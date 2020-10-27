var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

context.fillStyle = 'rgba(255, 255, 255, 0.9)';
context.fillRect(150, 150, 150, 150);
context.fillRect(150, 310, 150, 150);
context.fillRect(150, 470, 150, 150);
context.fillRect(310, 150, 150, 150);
context.fillStyle = 'rgba(0, 255, 255, 1)';
context.fillRect(310, 310, 150, 150);
context.fillStyle = 'rgba(255, 255, 255, 0.9)';
context.fillRect(310, 470, 150, 150);
context.fillRect(470, 150, 150, 150);
context.fillRect(470, 310, 150, 150);
context.fillRect(470, 470, 150, 150);

// Line

context.beginPath();
context.moveTo(140, 140);
context.lineTo(140, 630);
context.lineTo(630, 630);
context.lineTo(630, 140);
context.lineTo(140, 140);
context.strokeStyle = 'blue';
context.lineTo(630, 630);
context.moveTo(140, 630);
context.lineTo(630, 140);
context.stroke();

// Arc / Circle

var x = 385;
var y = 385;
for (let i = 0; i < 160; i++) {
  // var x = Math.random() * window.innerWidth;
  // var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x + i, y + i, 70, 0, Math.PI * 2, false);
  context.strokeStyle = 'black';
  context.stroke();
}
for (let i = 0; i < 160; i++) {
  // var x = Math.random() * window.innerWidth;
  // var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x + -i, y + -i, 70, 0, Math.PI * 2, false);
  context.strokeStyle = 'green';
  context.stroke();
}
for (let i = 0; i < 160; i++) {
  // var x = Math.random() * window.innerWidth;
  // var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x + i, y - i, 70, 0, Math.PI * 2, false);
  context.strokeStyle = 'red';
  context.stroke();
}
for (let i = 0; i < 160; i++) {
  // var x = Math.random() * window.innerWidth;
  // var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x + -i, y + i, 70, 0, Math.PI * 2, false);
  context.strokeStyle = 'blue';
  context.stroke();
}

context.beginPath();
context.arc(x, y, 70, 0, Math.PI * 2, false);
context.strokeStyle = 'white';
context.stroke();

// console.log(canvas)
