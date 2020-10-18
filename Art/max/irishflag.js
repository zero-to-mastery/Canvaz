function draw() {
  var canvas = document.getElementById('maxesCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(6, 156, 16)';
    ctx.fillRect(0, 0, 200, 600);

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(200, 0, 200, 600);

    ctx.fillStyle = 'rgb(235, 163, 7)';
    ctx.fillRect(400, 0, 200, 600);
  }
}
