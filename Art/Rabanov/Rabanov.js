window.onload = function() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(70, 50);
ctx.lineTo(60, 80);
ctx.fill();

ctx.beginPath();
ctx.moveTo(90, 50);
ctx.lineTo(110, 50);
ctx.lineTo(100, 80);
ctx.fill();

ctx.moveTo(30,120)
ctx.quadraticCurveTo(20, 15, 85, 25)
ctx.stroke();

ctx.moveTo(85,25)
ctx.quadraticCurveTo(40, 75, 135, 120)
ctx.stroke();

}
    
