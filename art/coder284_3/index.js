var canvas=document.querySelector("canvas");

canvas.width=700;
canvas.height=500;

var c=canvas.getContext("2d");

c.fillStyle="#3399FF";
c.arc(350,270,250,-(Math.PI)*1.33,(Math.PI)/3.0,false);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle="white";
c.arc(350,307,219,-(Math.PI)*1.3,(Math.PI)/3.3,false);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle="white";
c.arc(280,110,70,0,(Math.PI)*2,false);
c.fill();
c.stroke();

c.beginPath();
c.arc(290,130,19,-Math.PI,0,false);
c.stroke();

c.beginPath();
c.fillStyle="white";
c.arc(421,110,70,0,(Math.PI)*2,false);
c.fill();
c.stroke();

c.beginPath();
c.arc(410,130,19,-Math.PI,0,false);
c.stroke();


c.beginPath();
c.fillStyle="red";
c.arc(350,197,40,0,(Math.PI)*2,false);
c.fill();
c.stroke();
c.beginPath();
c.moveTo(350,237);
c.lineTo(350,397);
c.stroke();

c.beginPath();
c.arc(350,190,210,-(Math.PI)*1.17,(Math.PI)/6,true);
c.stroke();

c.beginPath();
c.arc(350,190,210,-(Math.PI)*1.17,(Math.PI)/6,true);
c.stroke();


c.beginPath();
c.moveTo(290,277);
c.lineTo(150,277);
c.stroke();

c.beginPath();
c.moveTo(290,247);
c.lineTo(170,217);
c.stroke();

c.beginPath();
c.moveTo(290,307);
c.lineTo(150,337);
c.stroke();

c.beginPath();
c.moveTo(410,277);
c.lineTo(550,277);
c.stroke();

c.beginPath();
c.moveTo(410,247);
c.lineTo(540,217);
c.stroke();

c.beginPath();
c.moveTo(410,310);
c.lineTo(540,337);
c.stroke();

c.beginPath();
c.fillStyle="red";
c.strokeStyle="black"
c.fillRect(219,486,260,13);
c.stroke();
