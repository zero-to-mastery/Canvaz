function draw() {
  var canvas = document.getElementById('maxesCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, 600, 200);

    ctx.fillStyle = 'rgb(235, 14, 14)';
    ctx.fillRect(0, 200, 600, 200);

    ctx.fillStyle = 'rgb(240, 225, 22)';
    ctx.fillRect(0, 400, 600, 200);
  }
}
