window.addEventListener('load', () => {
  const canvas = document.getElementById('front');
  // console.log(canvas)
  const ctx = canvas.getContext('2d');

  //resizing
  canvas.height = window.innerHeight - 24;
  console.log(canvas.height);
  canvas.width = window.innerWidth - 24;
  console.log(canvas.width);
  ctx.beginPath();
  ctx.arc(671, 320, 300, 0, 2 * Math.PI);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'white';
  ctx.stroke();
  // ctx.fillStyle = 'rgb(255,255,0)';
  ctx.fillStyle = 'rgba(228,155,15,0.1)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(471, 121, 400, 400);
  ctx.fillStyle = 'rgba(15,128,15,0.6)';
  ctx.fill();
  // ctx.lineWidth = 7 ;

  ctx.beginPath();
  ctx.rect(515, 210, 110, 110);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(715, 210, 110, 110);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(625, 320, 90, 55);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(560, 375, 220, 105);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(560, 480, 66, 40);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(714, 480, 66, 40);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();
});

window.addEventListener('load', () => {
  const canvas = document.getElementById('back');
  // console.log(canvas)
  const ctx = canvas.getContext('2d');

  //resizing
  canvas.height = window.innerHeight - 24;
  console.log(canvas.height);
  canvas.width = window.innerWidth - 24;
  console.log(canvas.width);
  ctx.beginPath();
  ctx.arc(671, 320, 300, 0, 2 * Math.PI);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'white';
  ctx.stroke();
  // ctx.fillStyle = 'rgb(255,255,0)';
  ctx.fillStyle = 'rgba(228,155,15,0.1)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(471, 121, 400, 400);
  ctx.fillStyle = 'rgba(15,128,15,0.6)';
  ctx.fill();
  // ctx.lineWidth = 7 ;

  ctx.beginPath();
  ctx.rect(515, 210, 110, 110);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(715, 210, 110, 110);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(625, 320, 90, 55);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(560, 375, 220, 105);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(560, 480, 66, 40);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.rect(714, 480, 66, 40);
  ctx.fillStyle = 'rgba(2, 41, 2,0.9)';
  ctx.fill();
});
