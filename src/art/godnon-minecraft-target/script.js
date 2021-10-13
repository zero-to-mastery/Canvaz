var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.rect(25, 25, 200, 200);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(45, 45, 160, 160);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.rect(70, 70, 110, 110);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(90, 90, 70, 70);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.rect(110, 110, 30, 30);
ctx.fillStyle = "red";
ctx.fill();
