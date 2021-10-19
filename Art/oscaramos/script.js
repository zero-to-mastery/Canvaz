const canvas = document.getElementById('oscaramos');

const draw = canvas.getContext('2d');

draw.fillStyle = 'red';
draw.fillRect(0, 0, 400, 300);

draw.fillStyle = 'white';
draw.fillRect(400 / 3, 0, 400 / 3, 300);

draw.stroke();
