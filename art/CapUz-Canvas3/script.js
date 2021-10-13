const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

c.strokeStyle = "#FFFF00";
c.lineWidth=3;
c.moveTo(300,100);
c.lineTo(400,200);
c.lineTo(300,200);
c.lineTo(400,300);
c.stroke();

c.beginPath()
c.strokeStyle = "#FFFFFF";
c.lineWidth = 5;
c.arc(300, 500, 125, 0,Math.PI * 2,false)
c.stroke()

c.beginPath()
c.arc(675, 500, 125, 0,Math.PI * 2,true)
c.stroke()

c.beginPath()
c.arc(489, 555, 125, Math.PI * 0-Math.PI * 0.31,Math.PI * 0-Math.PI * 0.7,true)
c.stroke()
