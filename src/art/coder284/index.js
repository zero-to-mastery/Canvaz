var canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
c.fillStyle="red";

c.fillRect(3,3,300,650);
c.fillStyle="green";

c.fillRect(303,3,1060,210);
c.fillStyle="black";

c.fillRect(303,440,1060,213);
