function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // circle
    ctx.beginPath();
    ctx.arc(175, 200, 55, 0, Math.PI * 2, true);
    ctx.lineWidth = 10;
    ctx.stroke();
    
    // triangle
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(250, 250);
    ctx.lineTo(350, 250);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.stroke();

    // square 
    ctx.strokeRect(385, 150,100, 100);
    ctx.lineWidth = 10;
    ctx.stroke();
  }
}