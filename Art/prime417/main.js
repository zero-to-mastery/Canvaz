(function () {
  let canvas, ctx;

  function init() {
    canvas = document.getElementById('canvas-element');
    ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'black';

    ctx.font = 'bold 16px Monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';

    ctx.strokeText('Fantasy Plane', 50, 250);

    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(100, 200);
    ctx.lineTo(90, 180);
    ctx.lineTo(60, 170);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(190, 180);
    ctx.lineTo(160, 180);

    ctx.fill();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
