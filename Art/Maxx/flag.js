function draw() {
  var canvas = document.getElementById('maxesCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(52, 180, 235)';
    ctx.fillRect(0, 0, 600, 200);

    ctx.fillStyle = 'rgb(235, 14, 14)';
    ctx.fillRect(0, 200, 600, 400);

    ctx.fillStyle = 'rgb(3, 163, 9)';
    ctx.fillRect(0, 400, 600, 600);
  }
}
