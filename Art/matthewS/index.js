const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

const img = new Image();
img.src = './pumpkin.png';

const imgTwo = new Image();
imgTwo.src = './ztmText.png';

window.onload = function () {
  context.fillStyle = '#93c2db';
  context.fillRect(canvas.width / 3, canvas.height / 5, 700, 500);

  context.fillStyle = 'black';
  context.fillRect(canvas.width / 3, canvas.height / 1.05, 700, 1);

  context.drawImage(img, canvas.width / 2.9, canvas.height / 10);
  context.drawImage(imgTwo, canvas.width / 3.2, canvas.height / 3);
};
