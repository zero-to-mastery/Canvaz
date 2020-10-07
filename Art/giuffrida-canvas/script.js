function draw() {
  var image = document.querySelector('img');
  var canvas = document.querySelector('canvas');

  var ctx = canvas.getContext('2d');

  ctx.fillRect(0, 0, 320, 320);

  ctx.fillStyle = '#989898';
  ctx.fillRect(10, 10, 300, 300);

  ctx.drawImage(image, 0, 0, 500, 500, 0, 0, 320, 320);
}

setTimeout(() => {
  draw();
}, 300);
