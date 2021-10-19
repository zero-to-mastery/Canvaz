const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'purple';
ctx.strokeRect(500, 0, 550, 550);
ctx.font = '48px serif';
ctx.textAlign = 'center';
ctx.fillText('Welcome to', 750, 50);
ctx.fillText('Hacktoberfest 2020', 750, 90);
