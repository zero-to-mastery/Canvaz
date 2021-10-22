const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// Color background
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Moon
function drawMoon() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fill();
}

function drawTriangle(x, y) {
    ctx.fillStyle = '#00FF00';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y - 100);
    ctx.lineTo(x + 200, y);
    ctx.fill();
}

function drawBase(x, y) {
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, 40, 20);
}

drawMoon();
drawTriangle(50, 300);
drawTriangle(50, 380);
drawTriangle(50, 460);
drawBase(130, 460);

