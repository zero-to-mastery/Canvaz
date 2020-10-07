const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
const r = parseInt(Math.random() * 255);
const g = parseInt(Math.random() * 255);
const b = parseInt(Math.random() * 255);
const a = Math.random();

for (var i = 0; i < 100; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  c.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  c.fill();
  c.stroke();
}

c.font = '150px Arial';
c.textAlign = 'center';
const gradient = c.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0', 'magenta');
gradient.addColorStop('0.5', 'blue');
gradient.addColorStop('1.0', 'red');
c.fillStyle = gradient;
c.fillText('Hacktoberfest!!', 600, 400);
