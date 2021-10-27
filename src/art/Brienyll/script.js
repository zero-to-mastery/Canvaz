var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.fillStyle='yellow';
    ctx.fill();

}
function drawSun(cx, cy, spikes, outerRadius, innerRadius) {

    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;
  	
    ctx.translate(80,-25)
    ctx.rotate(Math.PI/7.5)
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
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.fillStyle='yellow';
    ctx.fill();

}

function drawTopRectangle() {

	ctx.beginPath()
	ctx.moveTo(0,0)
  ctx.lineTo(-300,0)
  ctx.lineTo(600,-300)
  ctx.lineTo(600,-60)
  ctx.lineTo(250,100)
  ctx.lineTo(-410,0)
  ctx.strokeStyle='black';
    ctx.stroke();
  ctx.fillStyle='blue';
  ctx.fill()
  ctx.closePath();
}

function drawBottomRectangle() {

	ctx.beginPath()
	ctx.moveTo(250,100)
  ctx.lineTo(555,-35)
	ctx.lineTo(608,84)
  ctx.lineTo(-106,530)
  ctx.closePath();
  ctx.strokeStyle='black';
    ctx.stroke();
  ctx.fillStyle='red';
  ctx.fill()
}



drawStar(35, 65, 5, 20, 10);
drawStar(35, 235, 5, 20, 10);
drawStar(200, 160, 5, 20, 10);
drawSun(100, 150, 8, 10, 30);
drawTopRectangle();
drawBottomRectangle();


