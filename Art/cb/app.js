let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;
ctx.font = '68px Lobster';
ctx.fillStyle = 'purple';
ctx.textBaseline = 'top';
ctx.textBaseline = 'middle';
ctx.fillStyle = 'rgba(202, 199, 11, 0.14)';
ctx.fillRect(45, 120, 560, 100);

ctx.fillStyle = 'rgba(35, 103, 180, 0.14)';
ctx.fillRect(0, 0, 1000, 1000);

function drawText(
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

drawText(
  ctx,
  'Hactoberfest Rocks',
  w / 11,
  h / 2,
  5,
  true,
  '#9b4888',
  '#ff74f9',
  3,
  3
);
