var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 10, 200, 130);