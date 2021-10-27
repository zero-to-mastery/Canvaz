let canvas = document.getElementById('canvas');
let p = canvas.getContext('2d');


//outer circle
p.beginPath();
p.strokeStyle = '#daa520';
p.arc(400, 250, 100, 0, 2 * Math.PI);
p.lineWidth = 7;
p.stroke();

//inner circle
p.beginPath();
p.strokeStyle = '#daa520';
p.arc(400, 230, 20, 1.9, 2.4 * Math.PI);
p.lineWidth = 5;
p.stroke();

//inner triangle
p.beginPath();
p.strokeStyle = '#daa520';
p.moveTo(390, 250);
p.lineTo(380, 300);
p.lineTo(420, 300);
p.lineTo(410, 250);
p.lineWidth = 7;
p.stroke();
