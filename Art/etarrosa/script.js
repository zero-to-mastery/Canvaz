function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#9ef118';
    ctx.beginPath();
    ctx.moveTo(80, 90);
    ctx.lineTo(210, 90);
    ctx.lineTo(210, 140);
    ctx.lineTo(110, 200);
    ctx.lineTo(210, 200);
    ctx.lineTo(210, 230);
    ctx.lineTo(80, 230);
    ctx.lineTo(80, 180);
    ctx.lineTo(180, 120);
    ctx.lineTo(80, 120);
    ctx.fill();

    ctx.beginPath();
    ctx.fillRect(285, 90, 40, 140);
    ctx.fillRect(240, 90, 130, 30);

    ctx.beginPath();
    ctx.fillRect(400, 90, 40, 140);
    ctx.fillRect(510, 90, 40, 140);

    ctx.beginPath();
    ctx.moveTo(440, 90);
    ctx.lineTo(475, 140);
    ctx.lineTo(510, 90);
    ctx.lineTo(530, 110);
    ctx.lineTo(475, 180);
    ctx.lineTo(420, 110);
    ctx.fill();
  }
}
