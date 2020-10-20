const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// sign
context.fillRect(200, 150, 200, 100);

// head
context.beginPath();
context.moveTo(300, 150);
context.lineTo(240, 60);
context.lineTo(360, 60);
context.fillStyle = '#FD5200';
context.fill();

// legs
context.fillRect(255, 250, 40, 100);
context.fillRect(305, 250, 40, 100);

// left arm
context.beginPath();
context.arc(180, 180, 20, 0, Math.PI * 2, true);
context.fill();

// right arm
context.beginPath();
context.arc(420, 180, 20, 0, Math.PI * 2, true);
context.fill();

// sign text
context.font = '30px sans-serif';
context.fillStyle = 'white';
context.fillText('Welcome', 240, 180);
context.fillText('to', 285, 210);
context.fillText('Hacktoberfest!', 205, 245);

// eyes
context.beginPath();
context.arc(288, 90, 5, 0, Math.PI * 2, true);
context.fill();
context.beginPath();
context.arc(308, 90, 5, 0, Math.PI * 2, true);
context.fill();
