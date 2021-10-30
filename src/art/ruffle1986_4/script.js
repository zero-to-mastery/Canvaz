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

  ctx.translate(centerX - 200, centerY - 100);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.strokeRect(0, 0, 180, 200);
  ctx.closePath();

  ctx.translate(200, 0);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(180, 100);
  ctx.lineTo(0, 200);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(180, 100, 40, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(-200, 100, 40, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();

})();
