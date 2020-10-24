function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // draw Brazilian Flag
    // draw green rectangle
    ctx.fillStyle = '#01982E';
    ctx.fillRect(50, 0, 400, 280);

    // draw diamond shape

    ctx.fillStyle = '#F7F701';
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(450, 140);
    ctx.lineTo(250, 280);
    ctx.lineTo(50, 140);
    ctx.closePath();
    ctx.fill();

    // draw circle

    ctx.fillStyle = '#3130EA';
    ctx.beginPath();
    ctx.arc(250, 140, 90, 0, Math.PI * 2, true);
    ctx.fill();

    // draw stars

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(282, 202);
    ctx.lineTo(285, 205);
    ctx.lineTo(288, 202);
    ctx.lineTo(285, 199);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(210, 160);
    ctx.lineTo(215, 165);
    ctx.lineTo(220, 160);
    ctx.lineTo(215, 155);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(240, 180);
    ctx.lineTo(245, 185);
    ctx.lineTo(250, 180);
    ctx.lineTo(245, 175);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(282, 132);
    ctx.lineTo(285, 135);
    ctx.lineTo(288, 132);
    ctx.lineTo(285, 129);
    ctx.closePath();
    ctx.fill();
  }
}
