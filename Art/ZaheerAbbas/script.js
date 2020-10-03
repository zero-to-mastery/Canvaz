var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgb(20, 200, 20)';
    ctx.fillRect(j + i, j + i, 50, 50);
    ctx.fillStyle = 'rgb(20, 150, 20)';
    ctx.fillRect(i * 0.1 + j * 0.1, i * 0.1 + j * 0.1, 50, 50);
  }
}
