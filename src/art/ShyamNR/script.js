window.onload = function(){
    // console.log(document.querySelector("canvas").height,document.querySelector("canvas").width);
    //paper rocket like telegram logo
    let clr1 = "#fffc", clr2 = "#fff", clr3 = "#fff7";
    let cx = document.querySelector("canvas").getContext("2d");
  
    let innerAngle = Math.PI/36, outerAngle = Math.PI/7;
    let len = 150;
  
    cx.translate(75,65);
    cx.lineWidth = 0.2;
  
    cx.beginPath();
    cx.moveTo(0,0);
    cx.lineTo(len*Math.cos(Math.PI/4-innerAngle)/Math.cos(innerAngle), len*Math.sin(Math.PI/4-innerAngle)/Math.cos(innerAngle));
    let midAngle = innerAngle + Math.PI/18;
    let midLen = 1.25*len;
    cx.lineTo(midLen*Math.cos(Math.PI/4+midAngle)/Math.cos(midAngle), midLen*Math.sin(Math.PI/4+midAngle)/Math.cos(midAngle));
    cx.lineTo(len*Math.cos(Math.PI/4+innerAngle)/Math.cos(innerAngle), len*Math.sin(Math.PI/4+innerAngle)/Math.cos(innerAngle));
    cx.lineTo(0,0);
    cx.fillStyle = clr3;
    cx.fill();
    //cx.stroke();
  
    cx.beginPath();
    cx.lineTo(len*Math.cos(Math.PI/4+innerAngle)/Math.cos(innerAngle), len*Math.sin(Math.PI/4+innerAngle)/Math.cos(innerAngle));
    cx.lineTo(midLen*Math.cos(Math.PI/4+midAngle)/Math.cos(midAngle), midLen*Math.sin(Math.PI/4+midAngle)/Math.cos(midAngle));
    cx.lineTo(0,0);
    cx.fillStyle = clr1;
    cx.fill();
  
    cx.beginPath();
    cx.moveTo(0,0);
    // cx.lineTo(100,100);
    cx.lineTo(len*Math.cos(Math.PI/4-innerAngle)/Math.cos(innerAngle), len*Math.sin(Math.PI/4-innerAngle)/Math.cos(innerAngle));
    cx.lineTo(1.15*len*Math.cos(Math.PI/4-outerAngle+innerAngle)/Math.cos(outerAngle), len*Math.sin(Math.PI/4-outerAngle+innerAngle)/Math.cos(outerAngle));
    cx.lineTo(0,0);
    cx.fillStyle = clr2;
    cx.fill();
    // cx.beginPath();
    cx.moveTo(0,0);
    cx.lineTo(len*Math.cos(Math.PI/4+innerAngle)/Math.cos(innerAngle), len*Math.sin(Math.PI/4+innerAngle)/Math.cos(innerAngle));
    cx.lineTo(1.15*len*Math.cos(Math.PI/4+outerAngle+innerAngle)/Math.cos(outerAngle), len*Math.sin(Math.PI/4+outerAngle+innerAngle)/Math.cos(outerAngle));
    cx.lineTo(0,0);
    cx.fillStyle = clr2;
    cx.fill();
    cx.stroke();
  }