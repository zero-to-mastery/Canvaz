var canvas = document.getElementById('rect1');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#b1060f";              // Firebrick-color
ctx.fillRect(100,40,70,320);

var c = document.getElementById("rect2");
var ctx = c.getContext("2d");
ctx.fillStyle = "#b1060f";              // Firebrick-color
ctx.fillRect(230, 40, 70, 320);



var canvas = document.getElementById("middle_rect");
var ctx = canvas.getContext("2d");

draw(ctx);

function draw(ctx) {

    ctx.translate(15,15);
    ctx.beginPath();
    ctx.lineTo(215, 345); 
    ctx.lineTo(85, 25); 
    ctx.lineTo(155, 25); 
    ctx.lineTo(285, 345);
    ctx.closePath();
    ctx.fillStyle = "#e11";               // red color
    ctx.fill();
}

