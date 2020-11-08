let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//Resizing

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Flag
ctx.fillStyle = "orange";
ctx.fillRect(50,70,350,100);
// ctx.fillStyle = "white";
// ctx.fillRect(700,120,300,100);
ctx.fillStyle = "green";
ctx.fillRect(50,280,350,100);

ctx.beginPath();
ctx.moveTo(50,70);
ctx.lineTo(400,70);
ctx.lineTo(400,380);
ctx.lineTo(50,380);
ctx.lineTo(50,70);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle ="#1C136C";
let size = 500*0.9;
const segmentCount = 24;
let r = 40;// the radius of the wheel
  let degrees = 2*Math.PI / segmentCount;
  function drawSegment(){
    ctx.fillStyle = "1C136C";
    ctx.strokeStyle = "white";
    ctx.moveTo(0,0);
    ctx.lineTo(r,0);
    ctx.arc(0,0,r,0,degrees);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  
  ctx.translate(size/2,size/2); // translate the context in the center.
  for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex++) {
  drawSegment();
  ctx.rotate(degrees);
  }