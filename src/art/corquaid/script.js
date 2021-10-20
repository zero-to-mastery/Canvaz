let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

c.beginPath();
c.moveTo(60, 130);
c.lineTo(102, 162);
c.lineTo(120, 150);
c.lineTo(95, 130)
c.fillStyle = 'white';
c.fill();

c.beginPath();
c.moveTo(60, 200)
c.bezierCurveTo(137, 125, 273, 100, 330, 100)
c.bezierCurveTo(190, 120, 120, 170, 95, 200)
c.lineTo(60, 200)
c.fillStyle = 'white';
c.fill();

c.beginPath()
c.moveTo(124, 180)
c.lineTo(150, 200)
c.lineTo(180, 200)
c.lineTo(141, 169)
c.lineTo(124, 180)
c.fillStyle = 'white'
c.fill();
