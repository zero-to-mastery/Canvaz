const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Rectangle
ctx.beginPath();
ctx.fillStyle = 'rgba(255, 25, 25, 0.86)';
ctx.fillRect(145, 120, 145, 145);
ctx.fill();

// Circular shapes
ctx.beginPath();
ctx.arc(275, 120, 75, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = 'blue';
ctx.fill();

// Triangle
ctx.beginPath();
ctx.moveTo(270, 150); // pick up "pen," reposition at 300 (horiz), 0 (vert)
ctx.lineTo(270, 350); // draw straight down (from 300,0) to 200px
ctx.lineTo(435, 250); // draw up toward right (100 half of 200)
ctx.fillStyle = 'yellow';
ctx.fill();

// 300, 200
