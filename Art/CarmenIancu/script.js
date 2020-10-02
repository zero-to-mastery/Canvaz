const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// the triangle
context.beginPath();
context.moveTo(300, 100);
context.lineTo(100, 300);
context.lineTo(500, 300);
context.closePath();

// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

// the fill color
context.fillStyle = '#FF0000';
context.fill();

// the rectangle
context.beginPath();
context.moveTo(150, 305);
context.lineTo(150, 500);
context.lineTo(450, 500);
context.lineTo(450, 305);
context.closePath();

// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

// the fill color
context.fillStyle = '#0004ff';
context.fill();

// the left eye
context.beginPath();
context.arc(250, 400, 50, 0, Math.PI * 2, true);
context.stroke();

// the fill color
context.fillStyle = '#ffffff';
context.fill();

// the left dot
context.beginPath();
context.moveTo(270, 420);
context.arc(270, 420, 10, 0, Math.PI * 2, true);
context.stroke();

// the fill color
context.fillStyle = '#000000';
context.fill();

// the right eye
context.beginPath();
context.arc(355, 400, 50, 0, Math.PI * 2, true);
context.stroke();

// the fill color
context.fillStyle = '#ffffff';
context.fill();

// the right dot
context.beginPath();
context.moveTo(340, 420);
context.arc(330, 420, 10, 0, Math.PI * 2, true);
context.stroke();

// the fill color
context.fillStyle = '#000000';
context.fill();

// the nose
context.moveTo(290, 450);
context.arc(295, 450, 10, 0, Math.PI * 2, true);
context.stroke();
