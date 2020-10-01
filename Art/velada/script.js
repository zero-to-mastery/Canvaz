function draw() {
  var canvas = document.getElementById('box');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 150, 150);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(25, 15, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(85, 15, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(25, 75, 110, 50);
  }
}
