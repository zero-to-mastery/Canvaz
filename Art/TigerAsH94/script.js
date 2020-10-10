const canvas = document.getElementById('roFlag');

const jw = canvas.getContext('2d');

jw.fillStyle = '#002B7F';
jw.fillRect(0, 0, 200, 300);

jw.fillStyle = '#FCD116';
jw.fillRect(200, 0, 200, 300);

jw.fillStyle = '#CE1126';
jw.fillRect(400, 0, 200, 300);

jw.stroke();
