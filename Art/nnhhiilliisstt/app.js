function draw() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let w = canvas.width;
  let h = canvas.height;
  ctx.font = '68px Lobster';
  ctx.fillStyle = 'orangered';
  ctx.textBaseline = 'top';
  ctx.textBaseline = 'middle';
  draw3dText(
    ctx,
    'Hactoberfest>Olymipcs ',
    w / 11,
    h / 2,
    5,
    true,
    '#9b4668',
    '#ff73f9',
    2,
    2
  );
}

function draw3dText(
  ctx,
  text,
  x,
  y,
  textDepth,
  isFill,
  color,
  shadowColor,
  shadowBlur,
  interval
) {
  var i;
  for (i = 0; i < textDepth; i++) {
    if (isFill) {
      ctx.fillText(text, x - i, y - i);
    } else {
      ctx.strokeText(text, x - i, y - i);
    }
  }
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowOffsetX = textDepth + interval;
  ctx.shadowOffsetY = textDepth + interval;

  if (isFill) {
    ctx.fillStyle = color;
    ctx.fillText(text, x - i, y - i);
  } else {
    ctx.strokeStyle = color;
    ctx.strokeText(text, x - i, y - i);
  }
}

draw();
