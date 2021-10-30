let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let ballRadius = 30;
let y = canvas.height - ballRadius;
let dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(canvas.width/2, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.closePath();
}

function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    y += dy;
}

setInterval(init, 5);