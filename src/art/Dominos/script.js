const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight
c.rotate(0.785398);

c.beginPath();
c.rect(200, 100, 100, 100);
c.fillStyle = "#006491";
c.strokeStyle = "#006491";
c.fill();
c.stroke();

c.beginPath();
c.rect(200, -10, 100, 100);
c.fillStyle = "#e31837";
c.strokeStyle = "#e31837";
c.fill();


c.beginPath()
c.fillStyle = "#FFFFFF";
c.strokeStyle = "#FFFFFF";
c.arc(250, 40, 17.14, 0,Math.PI * 2,false)
c.fill();


c.beginPath()
c.fillStyle = "#FFFFFF";
c.strokeStyle = "#FFFFFF";
c.arc(230, 170, 17.14, 0,Math.PI * 2,false)
c.arc(270, 130, 17.14, 0,Math.PI * 2,false)
c.fill();
