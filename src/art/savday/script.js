var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 400, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 500);

//Create circle
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(250, 250, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()
ctx.arc(250, 250, 150, 0, 2 * Math.PI);
ctx.stroke();
