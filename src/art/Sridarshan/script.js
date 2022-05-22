const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px sans-serif";
ctx.fillText("My Favourite Brands", 175, 70);

// Constructing the ADIDAS Logo
ctx.beginPath();
ctx.moveTo(100, 350);
ctx.lineTo(150, 300);
ctx.lineTo(180, 370);
ctx.lineTo(110, 370);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150, 270);
ctx.lineTo(200, 220);
ctx.lineTo(270, 370);
ctx.lineTo(195, 370);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(195, 180);
ctx.lineTo(260, 130);
ctx.lineTo(370, 370);
ctx.lineTo(285, 370);
ctx.fill();
ctx.closePath();
ctx.font = "bold 100px Didact Gothic";
ctx.fillText("adidas", 90, 450);

// Constructing the BENZ Logo
ctx.beginPath();
ctx.arc(600, 300, 150, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(620, 300);
ctx.lineTo(600, 150);
ctx.lineTo(580, 300);
ctx.lineTo(473, 380);
ctx.lineTo(600, 340);
ctx.lineTo(723, 385);
ctx.lineTo(620, 300);
ctx.fill();
ctx.closePath();
