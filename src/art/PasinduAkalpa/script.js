const img = new Image();
img.src = "sgl.png";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {

    // Circle
    ctx.beginPath();
    ctx.arc(300, 60, 40, 0, 2 * Math.PI);
    ctx.lineWidth = 18;
    ctx.strokeStyle = "white";
    ctx.stroke();

    // Triangle
    ctx.beginPath();
    ctx.moveTo(300, 70);
    ctx.lineTo(390, 230);
    ctx.lineTo(200, 230);
    ctx.closePath();
    ctx.shadowColor = "black";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    ctx.lineJoin = "miter";
    ctx.lineWidth = 18;
    ctx.strokeStyle = "white";
    ctx.stroke();

    // Circle
    ctx.beginPath();
    ctx.arc(300, 440, 40, 0, 2 * Math.PI);
    ctx.lineWidth = 18;
    ctx.strokeStyle = "white";
    ctx.stroke();

    // Square
    ctx.beginPath();
    ctx.rect(192, 260, 207, 180);
    ctx.lineWidth = 18;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

img.onload = function() {
    ctx.drawImage(img, 150, 520);
}