const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawTriangle(x, y) {
    ctx.fillStyle = '#00FF00';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y - 100);
    ctx.lineTo(x + 200, y);
    ctx.fill();
}

function drawBase(x, y) {
    ctx.fillStyle = "#964B00";
    ctx.fillRect(x, y, 40, 100);
}

drawTriangle(50, 150);
drawTriangle(50, 210);
drawTriangle(50, 280);
drawBase(130, 280);

