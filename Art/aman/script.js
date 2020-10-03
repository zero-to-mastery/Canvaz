const canvas = document.getElementById('aman');

const jw = canvas.getContext('2d');

jw.fillStyle = '#FF9933';
jw.fillRect(0, 0, 400, 100);

jw.fillStyle = '#FFFFFF';
jw.fillRect(0, 100, 400, 100);

jw.fillStyle = '#138808';
jw.fillRect(0, 200, 400, 100);

jw.stroke();
