const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// sky and sun gradient
const grad1 = ctx.createRadialGradient(200, 190, 10, 100, 50, 360);
grad1.addColorStop(0.1, '#ef8d3a');
grad1.addColorStop(0.7, 'lightblue');

//water reflection gradient
const grad2 = ctx.createRadialGradient(190, 190, 70, 160, 50, 3);
grad2.addColorStop(0, '#7dd8f0');
grad2.addColorStop(0.2, 'white');

ctx.fillStyle = grad1;
ctx.fillRect(0, 0, 600, 200);

ctx.fillStyle = '#1f6e9f';
ctx.fillRect(0, 200, 600, 300);

ctx.fillStyle = grad2;
ctx.fillRect(0, 200, 500, 150);

//boat hull
ctx.fillStyle = '#33190a';
ctx.beginPath();
ctx.arc(400, 187, 45, 0, 3, 0);
ctx.fill();
//boat veil
ctx.beginPath();
ctx.moveTo(390, 205);
ctx.lineTo(375, 142);
ctx.lineTo(420, 175);
ctx.fill();

//birds
//closer bird
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(500, 95, 17, 0, 2, 0);
ctx.stroke();
ctx.beginPath();
ctx.arc(520, 75, 20, 0, 2, 0);
ctx.stroke();

//farther bird
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(450, 55, 12, 0, 2, 0);
ctx.stroke();

ctx.beginPath();
ctx.arc(468, 45, 14, 0, 2, 0);
ctx.stroke();
