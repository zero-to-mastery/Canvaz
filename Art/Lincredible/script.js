let ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = 728;
// battery
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.strokeRect(10, 10, 150, 50);
ctx.fillStyle = 'black';
ctx.fillRect(160, 25, 10, 20);
ctx.strokeStyle = 'red';
ctx.lineWidth = 20;
ctx.strokeRect(25, 25, 20, 20);
let img = document.createElement('img');
img.src = './run.png';
let imgW = 135,
  imgH = 135;

img.addEventListener('load', () => {
  let cycle = 0;
  function run() {
    ctx.clearRect(400, 599, imgW, imgH);
    ctx.drawImage(img, cycle * imgW, 0, imgW, imgH, 400, 599, imgW, imgH);
    cycle = (cycle + 1) % 4;
  }
  setInterval(run, 120);
});
