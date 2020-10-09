const canvas = document.getElementById('myCanvas');

const jw = canvas.getContext('2d');

jw.fillStyle = '#000000';
jw.fillRect(0, 0, 400, 100);

jw.fillStyle = '#FF0000';
jw.fillRect(0, 100, 400, 100);

jw.fillStyle = '#FFA500';
jw.fillRect(0, 200, 400, 100);

jw.stroke();
