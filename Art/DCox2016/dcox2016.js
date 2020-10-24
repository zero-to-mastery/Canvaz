const canvas = document.querySelector('#city');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'gray';
ctx.lineWidth = 10;
ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'multiply';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let pathX = [];
let pathY = [];
let loopCount = 1;
let firstClick;
var darkmode = document.querySelector('input[name=darkmode]');

darkmode.addEventListener('change', function () {
  if (this.checked) {
    document.getElementById('frame').style.backgroundColor = 'black';
    document.getElementById('frame').style.borderTopColor = '#585858';
    document.getElementById('frame').style.borderBottomColor = '#585858';
    document.getElementById('frame').style.borderLeftColor = 'gray';
    document.getElementById('frame').style.borderRightColor = 'gray';
    document.getElementById('city').style.filter = 'grayscale(100%)';
    document.getElementById('spiderman').style.filter = 'grayscale(100%)';
  } else {
    document.getElementById('frame').style.backgroundColor = '#447BBE';
    document.getElementById('frame').style.borderTopColor = '#DF1F2D';
    document.getElementById('frame').style.borderBottomColor = '#DF1F2D';
    document.getElementById('frame').style.borderLeftColor = '#2B3784';
    document.getElementById('frame').style.borderRightColor = '#2B3784';
    document.getElementById('city').style.filter = 'grayscale(0%)';
    document.getElementById('spiderman').style.filter = 'grayscale(0%)';
  }
});

function draw(e) {
  if (!isDrawing) return;
  pathX.push(e.clientX);
  pathY.push(e.clientY);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  [lastX, lastY] = [e.clientX, e.clientY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
  firstClick = e.clientX;
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', (e) => {
  isDrawing = false;
});

function launchSpidey() {
  console.log(firstClick);
  if (firstClick < 950) {
    var img = document.getElementById('spiderman');
    img.style.display = 'block';
    img.style.position = 'absolute';
    img.style.transform = 'scaleX(1)';
  } else if (firstClick > 950) {
    var img = document.getElementById('spiderman');
    img.style.display = 'block';
    img.style.position = 'absolute';
    img.style.transform = 'scaleX(-1)';
  }
  myLoop();
}

function myLoop() {
  setTimeout(function () {
    var img = document.getElementById('spiderman');
    img.style.left = pathX[loopCount] - 300 + 'px';
    img.style.top = pathY[loopCount] + 'px';
    loopCount++;
    if (loopCount < pathX.length) {
      myLoop();
    }
  }, 30);
}
