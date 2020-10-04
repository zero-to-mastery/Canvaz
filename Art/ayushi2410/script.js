function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 40, 40);
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(30, 30);
    ctx.lineTo(70, 30);
    ctx.lineTo(50, 10);
    //ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(30, 30);
    ctx.lineTo(30, 70);
    ctx.lineTo(10, 50);
    //ctx.stroke();
    ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(50, 10);
    ctx.lineTo(70, 30);
    ctx.lineTo(70, 70);
    ctx.lineTo(50, 50);
    //ctx.stroke();
    ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = '#0d0829';
    ctx.fillRect(30, 30, 40, 40);
  }
}
