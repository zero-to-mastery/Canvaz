window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');

  const ctx = canvas.getContext('2d');
  setCanvasSize();
  ctx.font = '30px Arial';
  ctx.fillText('Doodle', window.innerWidth / 2, 50);
  let painting = false;
  function startPos(e) {
    painting = true;
    draw(e);
  }

  function finishPos() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  canvas.addEventListener('mousedown', startPos);
  canvas.addEventListener('mouseup', finishPos);
  canvas.addEventListener('mousemove', draw);
});
function setCanvasSize(ctx) {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

window.addEventListener('resize', setCanvasSize);
