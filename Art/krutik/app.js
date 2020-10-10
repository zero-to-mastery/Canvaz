const canvas = document.getElementById('canvas');

const jw = canvas.getContext('2d');

jw.fillStyle = '#fff';
jw.fillRect(0, 0, 400, 100);

jw.fillStyle = '#0033a0';
jw.fillRect(0, 100, 400, 100);

jw.fillStyle = '#da291c';
jw.fillRect(0, 200, 400, 100);

jw.stroke();
