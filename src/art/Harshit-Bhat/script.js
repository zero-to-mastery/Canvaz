const canvas = document.querySelector('#tutorial');
const image = document.querySelector('#aum');
console.log(image);
let ctx;

if (canvas.getContext) {
  ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.drawImage(image, 0, 0);
  ctx.shadowBlur = 20;
  ctx.shadowColor = 'red';
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.fillRect(15, 15, 450, 450);
} else {
  console.log('Not Working');
}
