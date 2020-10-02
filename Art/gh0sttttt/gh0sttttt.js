const can = document.getElementById('main');
const ctx = can.getContext('2d');
const patternCanvas = document.createElement('canvas');
const patternContext = patternCanvas.getContext('2d');
const eye = patternCanvas.getContext('2d');
const smile = patternCanvas.getContext('2d');


function animate() {
  setInterval(init, 100);
}
function init() {
  patternCanvas.width = 150;
  patternCanvas.height = 150;
  patternContext.fillStyle = "transparent";
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
  patternContext.arc(75, 75, 50, 50, 0, Math.PI * 2, true);
  patternContext.stroke();


  eye.moveTo(55, 50);
  eye.beginPath();
  eye.fillStyle = "black";
  // Left Eye
  eye.arc(50, 65, 5, 0, Math.PI * 2, true);
  eye.closePath();
  eye.fill();
  // Right Eye
  eye.arc(100, 65, 5, 0, Math.PI * 2, true);
  eye.closePath();
  eye.fill();
  // Smile
  smile.moveTo(105, 75);
  smile.beginPath();
  smile.strokeStyle = "black";
  smile.arc(75, 80, 10, 7, Math.PI, false);
  smile.stroke();

  // Create primary canvas and fill with pattern
  // can.width = window.innerWidth;
  // can.height = window.innerHeight;
  const pattern = ctx.createPattern(patternCanvas, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, can.width, can.height);
  ctx.save();
}

document.addEventListener('DOMContentLoaded', init);
