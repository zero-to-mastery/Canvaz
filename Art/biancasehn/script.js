window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, '#FF8700');
  grd.addColorStop(1, 'white');

  var grd2 = ctx.createLinearGradient(400, 0, 600, 0);
  grd2.addColorStop(0, 'white');
  grd2.addColorStop(1, '#FF8700');

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //Rectangle
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 0, 320, 10);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 10, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 40, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 70, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 100, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 130, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 160, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 190, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 220, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 250, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 280, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 310, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 340, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 370, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 400, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 430, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 460, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 490, 320, 30);
  ctx.fillStyle = grd2;
  ctx.fillRect(320, 520, 320, 30);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 550, 320, 30);

  ctx.beginPath();
  ctx.fillStyle = '#FEE133';
  ctx.arc(320, 280, 140, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#EB8E00';
  ctx.arc(320, 280, 140, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(280, 250, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(360, 250, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'black';
  ctx.arc(320, 310, 60, 0, Math.PI);
  ctx.stroke();
});
