window.onload = function() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(60, 70);
ctx.lineTo(70, 70);
ctx.lineTo(70, 90);
ctx.fill();

ctx.moveTo(55, 80)
ctx.bezierCurveTo(68, 60, 90, 60, 105, 80)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 70);
ctx.lineTo(100, 70);
ctx.lineTo(90, 90);
ctx.fill();

ctx.moveTo(30,120)
ctx.quadraticCurveTo(75, -100, 135,120)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30, 120);
ctx.lineTo(56.25, 100 );
ctx.lineTo(82.5, 120);
ctx.lineTo(108.75, 100);
ctx.lineTo(135, 120);
ctx.stroke();

}
    
