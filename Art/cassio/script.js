const canvas = document.getElementById('cassio');

const draw = canvas.getContext('2d');

draw.fillStyle = 'green';
draw.fillRect(0, 0, 400, 300);

draw.beginPath();
draw.moveTo(25, 150);
draw.lineTo(200, 50);
draw.lineTo(375, 150);
draw.lineTo(200, 250);
draw.lineTo(25, 150);
draw.fillStyle = 'yellow';
draw.fill();

draw.beginPath();
draw.arc(200, 150, 70, 0, 2 * Math.PI);
draw.fillStyle = 'blue';
draw.fill();

draw.beginPath();
draw.moveTo(130, 140);
draw.bezierCurveTo(130, 135, 225, 120, 267, 170);
draw.bezierCurveTo(267, 180, 132, 140, 130, 160);
draw.fillStyle = 'white';
draw.fill();
