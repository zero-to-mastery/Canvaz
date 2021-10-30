(function () {
  'use strict';

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  function draw(progress) {
    ctx.clearRect(0, 0, width, height);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    if (progress < 1) {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, 81, 0, -(360 * progress * Math.PI / 180));
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    ctx.beginPath();
    ctx.font = 'bold 18px serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'middle';
    ctx.fillText(String(Math.floor(progress * 100)) + '%', centerX, centerY);
    ctx.closePath();

  }

  let progress = 0;

  function turn() {
    progress += 0.01;

    if (progress < 1) {
      draw(progress);
      requestAnimationFrame(turn);
    } else {
      draw(1);
    }
  }

  requestAnimationFrame(turn);

})();
