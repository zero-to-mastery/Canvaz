let canvas = document.getElementById('canvas');
let p = canvas.getContext('2d');

//body
p.beginPath();
p.fillStyle = '#C6935F';
p.rect(410, 300, 400, 230);
p.fill();
p.closePath();

//circle
p.beginPath();
p.arc(510, 410, 30, 0, 2 * Math.PI);
p.lineWidth = 10;
p.stroke();

//triangle
p.beginPath();
p.moveTo(600, 375);
p.lineTo(570, 440);
p.lineTo(635, 440);
p.lineTo(600, 372);
p.lineWidth = 7;
p.stroke();

//square
p.beginPath();
p.rect(670, 375, 65, 65);
p.lineWidth = 7;
p.stroke();