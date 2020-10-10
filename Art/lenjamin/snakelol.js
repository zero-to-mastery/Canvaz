const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Tongue
ctx.beginPath();
ctx.fillStyle = '#ff6b6b';
ctx.fillRect(100, 175, 100, 20);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.moveTo(120, 185);
ctx.lineTo(100, 175);
ctx.lineTo(100, 195);
ctx.fill();

// Head
ctx.beginPath();
ctx.fillStyle = '#1a535c';
ctx.fillRect(150, 120, 145, 145);
ctx.fill();

// Eyes
ctx.beginPath();
ctx.arc(180, 150, 15, 0, 2 * Math.PI);
ctx.fillStyle = '#f7fff7';
ctx.fill();

ctx.beginPath();
ctx.arc(180, 235, 15, 0, 2 * Math.PI);
ctx.fillStyle = '#f7fff7';
ctx.fill();

ctx.beginPath();
ctx.arc(180, 235, 5, 0, 2 * Math.PI);
ctx.fillStyle = '#ff6b6b';
ctx.fill();

ctx.beginPath();
ctx.arc(180, 150, 5, 0, 2 * Math.PI);
ctx.fillStyle = '#ff6b6b';
ctx.fill();

// Body
ctx.beginPath();
ctx.arc(320, 175, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();

ctx.beginPath();
ctx.arc(420, 225, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();

ctx.beginPath();
ctx.arc(520, 175, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();

ctx.beginPath();
ctx.arc(620, 225, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();

ctx.beginPath();
ctx.arc(720, 175, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();

ctx.beginPath();
ctx.arc(820, 225, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();

ctx.beginPath();
ctx.arc(920, 175, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#4ecdc4';
ctx.fill();
