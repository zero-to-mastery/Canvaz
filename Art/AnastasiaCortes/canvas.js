window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = '#FC0008';
  ctx.lineWidth = 5;
  ctx.strokeRect(50, 25, 650, 600);

  ctx.strokeStyle = '#F0F00E';
  ctx.lineWidth = 5;
  ctx.strokeRect(100, 100, 200, 500);

  ctx.fillStyle = 'black';
  ctx.fillRect(275, 50, 400, 200);
  ctx.strokeStyle = '#02F23E';
  ctx.lineWidth = 5;
  ctx.strokeRect(275, 50, 400, 200);

  ctx.fillStyle = 'black';
  ctx.fillRect(305, 200, 300, 350);
  ctx.strokeStyle = '#00F8FC';
  ctx.lineWidth = 5;
  ctx.strokeRect(305, 200, 300, 400);

  ctx.fillStyle = 'black';
  ctx.fillRect(230, 150, 175, 400);
  ctx.strokeStyle = '#F00E52';
  ctx.lineWidth = 5;
  ctx.strokeRect(230, 150, 175, 400);

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(500, 150);
  ctx.lineTo(650, 250);
  ctx.lineTo(500, 350);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#FC00F0';
  ctx.beginPath();
  ctx.moveTo(500, 150);
  ctx.lineTo(650, 250);
  ctx.lineTo(500, 350);
  ctx.closePath();
  ctx.stroke();

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(400, 375);
  ctx.lineTo(550, 375);
  ctx.lineTo(650, 475);
  ctx.lineTo(550, 575);
  ctx.lineTo(400, 575);
  ctx.lineTo(300, 475);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.moveTo(400, 375);
  ctx.lineTo(550, 375);
  ctx.lineTo(650, 475);
  ctx.lineTo(550, 575);
  ctx.lineTo(400, 575);
  ctx.lineTo(300, 475);
  ctx.closePath();
  ctx.stroke();
});
