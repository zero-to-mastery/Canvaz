const canvas = document.getElementById('canvas');

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');

  // Background
  ctx.beginPath();
  ctx.moveTo(50, 500);
  ctx.lineTo(450, 500);
  ctx.lineTo(550, 100);
  ctx.lineTo(150, 100);
  ctx.fill();

  // Text

  // Hacktoberfest
  ctx.fillStyle = "#903C5D";
  ctx.font = "48px serif";
  ctx.fillText("Hacktoberfest", 200, 200);

  // Is
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "54px serif";
  ctx.fillText("IS", 280, 320);

  // Awesome
  var lingrad = ctx.createLinearGradient(180, 430, 330, 430);
  lingrad.addColorStop(0, '#ff0000');
  lingrad.addColorStop(0.25, '#ffff00');
  lingrad.addColorStop(0.5, '#008000');
  lingrad.addColorStop(0.75, '#0094e4');
  lingrad.addColorStop(1, '#ee82ee');
  ctx.fillStyle = lingrad;
  ctx.font = "48px serif";
  ctx.fillText("Awesome", 180, 430);

} else {
  // Canvas was not supported here, so...
}