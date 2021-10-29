var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawTopRectangle() {

	ctx.beginPath()
	ctx.moveTo(0,0)
  ctx.lineTo(600,0)
  ctx.lineTo(600,150)
  ctx.lineTo(250,150)
  ctx.lineTo(0,0)
  ctx.fillStyle='#87CEFA';
  ctx.fill()
  ctx.closePath();
}

function drawBottomRectangle() {

	ctx.beginPath()
	ctx.moveTo(250,150)
  ctx.lineTo(600,150)
	ctx.lineTo(600,300)
  ctx.lineTo(0,300)
  ctx.closePath();
  ctx.fillStyle='#51D45E';
  ctx.fill()
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth=5;
    ctx.fillStyle='red';
    ctx.fill();
}

drawStar(90, 150, 5, 30, 15);
drawTopRectangle();
drawBottomRectangle();



