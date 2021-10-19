const canvas = document.getElementById('ravi');

const jw = canvas.getContext('2d');

jw.fillStyle = 'black';
jw.fillRect(0, 0, 400, 100);

jw.fillStyle = 'red';
jw.fillRect(0, 100, 400, 100);

jw.fillStyle = '#ffcc00';
jw.fillRect(0, 200, 400, 100);

jw.stroke();
