const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

c.strokeStyle = "#5ADEFF";
c.lineWidth=3;
c.moveTo(105,91.34);
c.lineTo(135,91.34);
c.lineTo(140,100);
c.lineTo(120,121.65);
c.lineTo(100,100);
c.lineTo(105,91.34);

c.lineTo(110,100);
c.lineTo(115,91.34);
c.lineTo(120,100);
c.lineTo(125,91.34);
c.lineTo(130,100);
c.lineTo(135,91.34);
c.lineTo(140,100);
c.lineTo(100,100);

c.moveTo(110,100);
c.lineTo(120,121.65);
c.moveTo(120,100);
c.lineTo(120,121.65);
c.moveTo(130,100);
c.lineTo(120,121.65);
c.moveTo(140,100);
c.lineTo(120,121.65);
c.stroke();

//Big Diamond

c.moveTo(225,156.7);
c.lineTo(375,156.7);
c.lineTo(400,200);
c.lineTo(300,308.25);
c.lineTo(200,200);
c.lineTo(225,156.7);

c.lineTo(250,200);
c.lineTo(275,156.7);
c.lineTo(300,200);
c.lineTo(325,156.7);
c.lineTo(350,200);
c.lineTo(375,156.7);
c.lineTo(400,200);
c.lineTo(200,200);

c.moveTo(250,200);
c.lineTo(300,308.25);
c.moveTo(300,200);
c.lineTo(300,308.25);
c.moveTo(350,200);
c.lineTo(300,308.25);
c.moveTo(400,200);
c.lineTo(300,308.25);
c.stroke();
