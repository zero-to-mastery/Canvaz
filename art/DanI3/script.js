const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

function drawHouse(rx1, rx2, rx3, ry1, ry2, bx1, bx2, by1, by2) {
    // the triangle
    context.beginPath();
    context.moveTo(rx1, ry1);
    context.lineTo(rx2, ry2);
    context.lineTo(rx3, ry2);
    context.closePath();
    context.fillStyle = 'yellow';
    context.fill();

// the rectangle
    context.beginPath();
    context.moveTo(bx1, by1);
    context.lineTo(bx1, by2);
    context.lineTo(bx2, by2);
    context.lineTo(bx2, by1);
    context.closePath();
    context.fillStyle = 'grey';
    context.fill();
}

drawHouse(300, 100,500,105, 305, 150, 450, 305, 500);

