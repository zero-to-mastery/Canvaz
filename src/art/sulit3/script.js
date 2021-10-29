let canvas = document.getElementById('canvas');
let p = canvas.getContext('2d');

//upper circle 
p.beginPath();
p.strokeStyle = '#fff';
p.arc(610, 250, 30, 0, 2 * Math.PI);
p.lineWidth = 10;
p.stroke();

//triangle 
p.beginPath();
p.strokeStyle = '#fff';
p.moveTo(610, 250);
p.lineTo(550, 390);
p.lineTo(680, 390);
p.lineTo(610, 250);
p.stroke();

//square
p.beginPath();
p.strokeStyle = '#fff';
p.rect(545, 420, 140, 140);
p.stroke();

//lower circle
p.beginPath();
p.strokeStyle = '#fff';
p.arc(610, 560, 30, 0, 2 * Math.PI);
p.lineWidth = 10;
p.stroke();