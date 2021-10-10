let canvas = document.getElementById("batCanvas");
let ctx = canvas.getContext("2d");

let grd = ctx.createRadialGradient(90, 50, 50, 120, 70, 320);
grd.addColorStop(0, "white");
grd.addColorStop(1, "black");

ctx.beginPath();
ctx.moveTo(40, 20);
ctx.lineTo(140, 20);
ctx.quadraticCurveTo(138, 60, 170, 60);
ctx.lineTo(180, 60);
ctx.lineTo(185, 30);
ctx.lineTo(192, 45);
ctx.quadraticCurveTo(200, 42, 210, 45);
ctx.lineTo(215, 30);
ctx.lineTo(222, 60);
ctx.lineTo(226, 60);
ctx.quadraticCurveTo(262, 60, 260, 20);
ctx.lineTo(365, 20);
ctx.quadraticCurveTo(302, 40, 330, 100);
ctx.quadraticCurveTo(222, 100, 205, 150);
ctx.quadraticCurveTo(182, 100, 80, 100);
ctx.quadraticCurveTo(102, 40, 40, 20);
ctx.fillStyle = grd;
ctx.fill();
ctx.stroke();

ctx.font = "20px Raleway";
ctx.fillText("T  H  E      D  A  R  K      K  N  I  G  H  T", 35, 180);
