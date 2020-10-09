window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth - 100;

  // variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishPinting() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (painting == false) {
      return;
    }
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  // Event listners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishPinting);
  canvas.addEventListener('mousemove', draw);
});
