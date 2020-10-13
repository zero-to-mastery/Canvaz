function draw() {
  var canvas = document.getElementById('maxesCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, 600, 100);

    ctx.fillStyle = 'rgb(245, 192, 20)';
    ctx.fillRect(0, 100, 600, 100);

    ctx.fillStyle = 'rgb(245, 238, 20)';
    ctx.fillRect(0, 200, 600, 100);

    ctx.fillStyle = 'rgb(5, 179, 5)';
    ctx.fillRect(0, 300, 600, 100);

    ctx.fillStyle = 'rgb(50, 41, 227)';
    ctx.fillRect(0, 400, 600, 100);

    ctx.fillStyle = 'rgb(162, 38, 224)';
    ctx.fillRect(0, 500, 600, 100);
  }
}
