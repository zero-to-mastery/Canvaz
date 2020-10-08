// Initialize elements
var canvas = document.getElementById('canvas');
image = new Image();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
var zoomFactor = 1;
image.src = 'Images/backGround.jpg';
//Once image loaded, draw atomic structure
image.onload = drawAtomicStructure;

function drawAtomicStructure() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.font = '30px Arial';
  ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
  ctx.strokeText('Atomic Structure', canvas.width / 2 - 100, 50);
  ctx.strokeStyle = 'rgba(255, 253,25, 0.9)';
  ctx.lineWidth = 2;
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  drawCircle(0, 0, 255, 0, 2 * Math.PI, true);
  drawCircle(0, 0, 205, 0, 2 * Math.PI, true);
  drawCircle(0, 0, 155, 0, 2 * Math.PI, true);
  drawCircle(0, 0, 95, 0, 2 * Math.PI, true);
  var time = new Date();
  createAtoms(time, 95, 0, 'rgba(255, 120, 230, 1)', 10, 1);
  createAtoms(time, 155, 0, 'rgba(25, 10, 230, 1)', 13, 3);
  createAtoms(time, 205, 0, 'rgba(251, 0, 0, 1)', 16, 5);
  createAtoms(time, 255, 0, 'rgba(15, 226, 120, 1)', 20, 1.5);
  ctx.restore();
  window.requestAnimationFrame(drawAtomicStructure);
}

function drawCircle(xPos, yPos, radius, startAngle, endAngle, isClockWise) {
  ctx.beginPath();
  ctx.arc(xPos, yPos, radius, startAngle, endAngle, !isClockWise);
  ctx.stroke();
}

function createAtoms(time, xPos, yPos, color, radius, timeDelay) {
  ctx.fillStyle = color;
  ctx.save();
  ctx.beginPath();
  // updates rotation value as per current time
  ctx.rotate(
    ((2 * Math.PI) / timeDelay) * time.getSeconds() +
      ((2 * Math.PI) / (timeDelay * 1000)) * time.getMilliseconds()
  );
  ctx.translate(xPos, yPos);
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
}
// on Resize
onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
