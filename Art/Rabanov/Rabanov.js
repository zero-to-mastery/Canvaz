window.onload = function() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//left eye
ctx.beginPath();
ctx.moveTo(60,35);
ctx.quadraticCurveTo(55,55,70,50);
ctx.fill();

//right eye
ctx.beginPath();
ctx.moveTo(100,35);
ctx.quadraticCurveTo(105,55,90,50);
ctx.fill();

//left tooth
ctx.beginPath();
ctx.moveTo(60, 70);
ctx.lineTo(70, 70);
ctx.lineTo(70, 90);
ctx.fill();

//left claw

ctx.beginPath();
ctx.moveTo(20,28);
ctx.lineTo(18,35);
ctx.lineTo(35,40);
ctx.fill();

ctx.beginPath();
ctx.moveTo(27,17);
ctx.lineTo(25,25);
ctx.lineTo(33,35);
ctx.lineTo(33,25);
ctx.fill();

ctx.beginPath();
ctx.moveTo(45,25); //right corner
ctx.lineTo(38,28);
ctx.lineTo(38,35);
ctx.lineTo(42,30);
ctx.fill();

//right claw (y axis at 75); 

ctx.beginPath();
ctx.moveTo(105,25); //left corner
ctx.lineTo(112,28); //draw to the right
ctx.lineTo(112,35);
ctx.lineTo(108,30);
ctx.fill();

ctx.beginPath();
ctx.moveTo(123,17);
ctx.lineTo(125,25);
ctx.lineTo(117,35);
ctx.lineTo(117,25);
ctx.fill();

ctx.beginPath();
ctx.moveTo(130,28);
ctx.lineTo(132,35);
ctx.lineTo(115,40);
ctx.fill();

//mouth
ctx.moveTo(55, 80)
ctx.bezierCurveTo(68, 60, 90, 60, 105, 80)
ctx.fill();

//right tooth
ctx.beginPath();
ctx.moveTo(90, 70);
ctx.lineTo(100, 70);
ctx.lineTo(90, 90);
ctx.fill();

//ghost body top
ctx.moveTo(30,120)
ctx.quadraticCurveTo(75, -100, 135,120)
ctx.stroke();

//zig-zag ghost body bottom
ctx.beginPath();
ctx.moveTo(30, 120);
ctx.lineTo(56.25, 100 );
ctx.lineTo(82.5, 120);
ctx.lineTo(108.75, 100);
ctx.lineTo(135, 120);
ctx.stroke();

}
    
