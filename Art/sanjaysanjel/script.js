//Variable declaration for Canvas

const canvas = document.querySelector('#freedraw');
const canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvasContext.strokeStyle = '#1B1464';
canvasContext.lineJoin = 'round';
canvasContext.lineCap = 'round';

let lastXPoint = 0;
let lastYPoint = 0;
let hue = 0;
let isDrawing = false;
let direction = true;

function drawInTheCanvas(e) {
  if (!isDrawing) return;
  console.log(e);

  canvasContext.strokeStyle = `hsl(${hue},100%,50%)`;
  canvasContext.beginPath();
  canvasContext.moveTo(lastXPoint, lastYPoint);
  canvasContext.lineTo(e.offsetX, e.offsetY);
  canvasContext.stroke();

  [lastXPoint, lastYPoint] = [e.offsetX, e.offsetY];
  hue++;

  if (hue > 360) {
    hue = 0;
  }
  if (canvasContext.lineWidth > 30 || canvasContext.lineWidth <= 1) {
    //adjusting hue color direction
    direction = !direction;
  }

  if (direction) {
    canvasContext.lineWidth++;
  } else {
    canvasContext.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  console.log('On canvas');
  isDrawing = true;
  [lastXPoint, lastYPoint] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', drawInTheCanvas);
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mouseup', () => (isDrawing = false));
