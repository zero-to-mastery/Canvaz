function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    let defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (let side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}
let ctx = document.getElementById("canvas").getContext("2d");

// To change the color on the rectangle, just manipulate the context

ctx.strokeStyle = "rgb(196, 48, 43)";
ctx.fillStyle = "rgb(196, 48, 43)";
roundRect(ctx, 100, 20, 200, 100, 20, true);

ctx.beginPath();
ctx.moveTo(180, 50);
ctx.lineTo(220, 70);
ctx.lineTo(180, 90);
ctx.closePath();

ctx.lineWidth = 10;
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.fillStyle = "#FFF";
ctx.fill();


