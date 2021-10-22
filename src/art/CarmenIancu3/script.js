function init() {
    setInterval(() => {
        drawStar(150, 150, 60, 30, '#FDA50F');
        setTimeout(() => {
            drawStar(150, 150, 50, 25, '#FABD02');
        }, 100);
        setTimeout(() => {
            drawStar(150, 150, 40, 20, '#FDCE2A');
        }, 200);
        setTimeout(() => {
            drawStar(150, 150, 30, 15, '#FCE205');
        }, 300);
        setTimeout(() => {
            drawStar(150, 150, 20, 10, '#FFFFFF');
        }, 400);
    }, 500);
}

function drawStar(startX, startY, outerRadius, innerRadius, color) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let rot = Math.PI / 2 * 3;
    let x = startX;
    let y = startY;
    // 5 is the no of spikes
    let step = Math.PI / 5;

    ctx.beginPath();
    ctx.moveTo(startX, startY - outerRadius);
    for (let i = 0; i < 5; i++) {
        x = startX + Math.cos(rot) * outerRadius;
        y = startY + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = startX + Math.cos(rot) * innerRadius;
        y = startY + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(startX, startY - outerRadius);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
}

init();