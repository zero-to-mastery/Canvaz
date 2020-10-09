const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

Math.radians = function (degrees) {
  return (degrees * Math.PI) / 180;
};
Math.radians(90);

// left eye
ctx.beginPath();
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(310, 210, 15, 0, 2 * Math.PI);
ctx.fillStyle = '#000';
ctx.fill();
// right eye
ctx.beginPath();
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(390, 210, 15, 0, 2 * Math.PI);
ctx.fillStyle = '#000';
ctx.fill();
// nose
ctx.beginPath();
ctx.arc(350, 230, 30, 0, 2 * Math.PI);
ctx.fillStyle = '#000';
ctx.fill();
// smile
ctx.beginPath();
ctx.arc(350, 250, 75, Math.radians(0), Math.radians(180), false);
ctx.stroke();
