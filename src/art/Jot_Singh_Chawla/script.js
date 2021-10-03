var c = document.getElementById("middle_circle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.fill();
ctx.lineWidth = 25;
ctx.strokeStyle = "#fff";
ctx.arc(200, 200, 60, 0, 2 * Math.PI);
ctx.stroke();
         
roundedRectangle(60, 60, 280, 280, 60);

function roundedRectangle(x, y, w, h, radius)
    {
        var canvas = document.getElementById("rectangle");
        var context = canvas.getContext("2d");
        var r = x + w;
        var b = y + h;
        context.beginPath();
        context.strokeStyle="white";
        context.lineWidth="25";
        context.moveTo(x+radius, y);
        context.lineTo(r-radius, y);
        context.quadraticCurveTo(r, y, r, y+radius);
        context.lineTo(r, y+h-radius);
        context.quadraticCurveTo(r, b, r-radius, b);
        context.lineTo(x+radius, b);
        context.quadraticCurveTo(x, b, x, b-radius);
        context.lineTo(x, y+radius);
        context.quadraticCurveTo(x, y, x+radius, y);
        context.stroke();
    }

function drawClock() {
    ctx.arc(285, 115, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    }
    
    var canvas = document.getElementById("circle");
    var ctx = canvas.getContext("2d");
    var radius = 22;

drawClock();        
