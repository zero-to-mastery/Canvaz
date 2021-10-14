var canvas = null;
var context = null;
var c_width;
var c_height;

initFace();

function initFace() {
   canvas = document.getElementById("face");
   context = canvas.getContext("2d");
   context.lineWidth = 17;
   c_width = canvas.offsetWidth;
   c_height = canvas.offsetHeight;

   //draw the face
   drawSmileyFace();
}

function drawSmileyFace() {
   drawFace();
   drawLeftEye();
   drawRightEye();
   drawNose();
   drawSmile();
}

function drawFace() {
   // face
   context.beginPath();
   context.arc(c_width/2, c_height/2, 170, 0, degreesToRadians(360), true);
   context.fillStyle = "#FFFF00";
   context.fill();
   context.stroke();
}
function drawLeftEye(dx, dy) {
   x = 230;
   y = 250;

   dx = dx || 0;
   x1 = x + parseFloat(dx);

   dy = dy || 0;
   y1 = y + parseFloat(dy);

   // left eye
   context.beginPath();
   context.arc(x, y, 50, 0, degreesToRadians(360), true);
   context.fillStyle = "#FFFFFF";
   context.fill();
   context.strokeStyle = '#000000';
   context.stroke();
   //inner left eye
   context.beginPath();
   context.arc(x1, y1, 20, 0, degreesToRadians(360), true);
   context.fillStyle = "#0053cf";
   context.fill();
   context.strokeStyle = '#F74700';
   context.stroke();
}

function drawRightEye(dx, dy) {
   x = 370;
   y = 250;

   dx = dx || 0;
   x1 = x + parseFloat(dx);

   dy = dy || 0;
   y1 = y + parseFloat(dy);

   // right eye
   context.beginPath();
   context.arc(x, y, 50, 0, degreesToRadians(360), true);
   context.fillStyle = "#FFFFFF";
   context.fill();
   context.strokeStyle = '#000000';
   context.stroke();
   //inner right eye
   context.beginPath();
   context.arc(x1, y1, 20, 0, degreesToRadians(360), true);
   context.fillStyle = "#0053cf";
   context.fill();
   context.strokeStyle = '#F74700';
   context.stroke();
}
function drawNose() {

  context.beginPath();
  context.moveTo(300, 200);
  context.lineTo(220, 80);

  context.lineTo(380, 80);
  context.fillStyle = '#a434eb';
  context.fill();
   // nose
   context.strokeStyle = '#000000';
   context.fillStyle = "#000000";
   context.beginPath();

   context.lineTo(325, 300);
   context.lineTo(300, 325);
   context.lineTo(275, 300);
   context.closePath();
   context.fill();
}
function drawSmile() {

   context.beginPath();
   context.arc(300, 350, 75, degreesToRadians(0), degreesToRadians(180), false);
   context.stroke();
}

function getMousePos(canvas, evt) {
   var rect = canvas.getBoundingClientRect();
   return {
     x: evt.clientX - rect.left,
     y: evt.clientY - rect.top
   };
}
canvas.addEventListener('mousemove', function(evt) {
   var mousePos = getMousePos(canvas, evt);
   context.clearRect(0, 0, canvas.width, canvas.height);
   var eyeY = 250;
   var leyeX = 200;
   var reyeX = 400;
   var ldx = 0;
   var rdx = 0;
   var ldy = 0;

   if (eyeY > mousePos.y) {
     ldy = 100 - (mousePos.y/eyeY * 100);
     ldy = (ldy * 15) / 100;
     ldy = 0 - ldy;
   } else {
     ldy = 100 - ((c_height - mousePos.y)/(c_height - eyeY) * 100);
     ldy = (ldy * 15) / 100;
   }

   if (leyeX < mousePos.x) {
    //left eye
    ldx = 100 - ((c_width - mousePos.x)/(c_width - leyeX) * 100);
    ldx = (ldx * 15) / 100;

    //right eye
    rdx = 100 - ((c_width - mousePos.x)/(c_width - reyeX) * 100);
    rdx = (rdx * 15) / 100;
   } else {
    //left eye
    ldx = 100 - (mousePos.x/leyeX) * 100;
    ldx = (ldx * 15) / 100;
    ldx = 0 - ldx;

    //right eye
    rdx = 100 - (mousePos.x/reyeX) * 100;
    rdx = (rdx * 15) / 100;
    rdx = 0 - rdx;
   }

   drawFace();
   drawLeftEye(ldx, ldy);
   drawRightEye(rdx, ldy);
   drawNose();
   drawSmile();

}, false);

function degreesToRadians(degrees) {
   radians = (degrees * Math.PI)/180;
   return radians;
}
