var canvas=document.querySelector("canvas");

// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;

var c=canvas.getContext("2d");

c.fillStyle="red";
c.arc(150,73,40,0,Math.PI*2,false);
c.fill();
