const myCanvas = document.getElementById('myCanvas');

const ctx = myCanvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 500, 500)

ctx.fillStyle = '#FF6501';
ctx.fillRect(110, 50, 70, 300)

ctx.fillStyle = '#FF6501';
ctx.fillRect(220, 50, 70, 300)

// top right box

ctx.fillStyle = '#FF6501';
ctx.fillRect(70, 50, 40, 80)

// bottom right box

ctx.fillStyle = '#FF6501';
ctx.fillRect(70, 270, 40, 80)

// top left box

ctx.fillStyle = '#FF6501';
ctx.fillRect(290, 50, 40, 80)

// bottom left box

ctx.fillStyle = '#FF6501';
ctx.fillRect(290, 270, 40, 80)

ctx.beginPath();

ctx.fillStyle = '#FF6501';
ctx.moveTo(70, 130);
ctx.lineTo(110, 130);
ctx.lineTo(110, 170);

ctx.fillStyle = '#FF6501';
ctx.moveTo(70, 270);
ctx.lineTo(110, 270);
ctx.lineTo(110, 230);

ctx.fillStyle = '#FF6501';
ctx.moveTo(290, 130);
ctx.lineTo(290, 170);
ctx.lineTo(330, 130);

ctx.fillStyle = '#FF6501';
ctx.moveTo(290, 230);
ctx.lineTo(290, 270);
ctx.lineTo(330, 270);

ctx.fill();