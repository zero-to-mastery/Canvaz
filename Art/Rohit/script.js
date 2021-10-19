const canvas = document.getElementById('rohit');

const jw = canvas.getContext('2d');

jw.fillStyle = 'white';
jw.fillRect(0, 100, 450, 100);

jw.fillStyle = 'blue';
jw.fillRect(40, 40, 150, 100);

jw.fillStyle = 'red';
jw.fillRect(20, 20, 150, 100);

jw.stroke();
