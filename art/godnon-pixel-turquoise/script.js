var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 210, 210);
ctx.fillStyle = "#008080";
ctx.fill();

ctx.beginPath();
ctx.rect(45, 45, 165, 165);
ctx.fillStyle = "#10A29A";
ctx.fill();

ctx.beginPath();
ctx.rect(45, 45, 120, 120);
ctx.fillStyle = "#20B2AA";
ctx.fill();


ctx.beginPath();
ctx.rect(90, 90, 75, 75);
ctx.fillStyle = "#40E0D0";
ctx.fill();
