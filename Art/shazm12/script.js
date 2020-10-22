var c = document.getElementById('mycanvas');
var can = c.getContext('2d');

can.strokeRect(20, 20, 150, 100);
can.shadowBlur = '1';
can.shadowColor = 'black';
can.font = '40px Arial';
can.fillStyle = 'red';
can.strokeText('Hacktoberfest 2020', 80, 80);
