var canvas = null;
var context = null;
var rotateAngle = null;

window.onload = function() {
  canvas = document.getElementById('my-canvas');
    context = canvas.getContext("2d");
    rotateAngle = 0;
    animation();
};

function animation() {
    canvas.width = canvas.width;
    context.save();

    context.translate(150, 150);
    context.rotate(rotateAngle * Math.PI/180);
    context.translate(-150, -150);

    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 20;

    context.fillStyle = "rgba(255,255,255,1)";
    context.moveTo(150, 120);
    context.lineTo(150, 50);
    context.stroke();

    context.strokeStyle = "rgba(255,255,255,0.8)";
    context.moveTo(130, 130);
    context.lineTo(80, 80);
    context.stroke();

    context.strokeStyle = "rgba(255,255,255,0.5)";
    context.moveTo(120, 150);
    context.lineTo(50, 150);
    context.stroke();

    context.strokeStyle = "rgba(255,255,255,0.35)";
    context.moveTo(130, 170);
    context.lineTo(80, 220);
    context.stroke();

    context.strokeStyle = "rgba(255,255,255,0.2)";
    context.moveTo(150, 180);
    context.lineTo(150, 250);
    context.stroke();

    context.closePath();
    context.save();
    context.restore();

    rotateAngle += 5;

    if (rotateAngle > 360) {
        rotateAngle = 5;
    }

    setTimeout(animation, 30);
}