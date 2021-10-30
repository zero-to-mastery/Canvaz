let canvas = document.getElementById('canvas');
let p = canvas.getContext('2d');

//body
p.beginPath();
p.fillStyle = '#C6935F';
p.rect(410, 300, 400, 230);
p.fill();
p.closePath();

//circle
p.beginPath();
p.arc(510, 410, 30, 0, 2 * Math.PI);
p.lineWidth = 10;
p.stroke();

//triangle
p.beginPath();
p.moveTo(600, 375);
p.lineTo(570, 440);
p.lineTo(635, 440);
p.lineTo(600, 372);
p.lineWidth = 7;
p.stroke();

//square
p.beginPath();
p.rect(670, 375, 65, 65);
p.lineWidth = 7;
p.stroke();


////////////////////
//1st Column
////////////////////
function column1() {
  //1st column rectangle
  p.beginPath();
  p.fillStyle = '#FF0000';
  p.fillRect(500, 500, 200, 290);
  p.closePath();
  
  //1st column elipse
  function Oval(x, y, radiusX, radiusY, rotation) {
    p.beginPath();
    p.fillStyle = '#000';
    p.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    p.fill();
    p.closePath();
  }
  
  let deg = 90;
  let rad = deg * (Math.PI / 180.0);
  
  //1st Mask
  Oval(600, 620, 70, 50, rad);
  
  
  //1st column circle
  p.beginPath();
  p.strokeStyle = '#fff';
  p.arc(600, 604, 30, 0, 2 * Math.PI);
  p.lineWidth = 10;
  p.stroke();
}


column1();
