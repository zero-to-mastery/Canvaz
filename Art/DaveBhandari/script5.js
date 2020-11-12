var canvas = document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeStyle = "white";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.strokeText("ZTM",canvas.width/2, canvas.height/2);
ctx.fillText("Zero to Mastery",200,200);

// Create gradient
//var grd = ctx.createRadialGradient(75,50,5,90,60,500);
//grd.addColorStop(0,"red");
//grd.addColorStop(1,"white");

// Fill with gradient
//ctx.fillStyle = grd;
//ctx.fillRect(0,0,400,300);

ctx.moveTo(0,170);
ctx.lineTo(400,170);
ctx.stroke();

ctx.moveTo(0,220);
ctx.lineTo(400,220);
ctx.stroke();
