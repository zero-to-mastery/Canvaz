function draw() {
  var canvas = document.getElementById('maxesCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(235, 14, 14)';
    ctx.fillRect(0, 0, 600, 150);

    ctx.fillStyle = 'rgb(240, 225, 23)';
    ctx.fillRect(0, 150, 600, 300);

    ctx.fillStyle = 'rgb(235, 14, 14)';
    ctx.fillRect(0, 450, 600, 150);
  }
}
