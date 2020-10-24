console.log('hey just for testing');

//get DOM element canvas and set its context
const c = document.getElementById('paintWindow');
const ctx = c.getContext('2d');

//set the background color of the canvas
ctx.fillStle = 'black';
ctx.fillRect(0, 0, 300, 300);

//set up stroke
const color = '#C0392B';
ctx.strokeStyle = color;
ctx.lineWidth = 1;

//small heart upper left arc
const leftUpperStart = { x: 150, y: 150 }; //x,y
const leftUpperP1 = { x: 150, y: 120 }; //x, y-30
const leftUpperP2 = { x: 100, y: 120 }; //x-50, y-30
const leftUpperEnd = { x: 100, y: 150 }; //x-50, y

//small heart lower left
const leftLowerStart = { x: 100, y: 150 }; //x-50, y
const leftLowerP1 = { x: 100, y: 180 }; //x-50, y+30
const leftLowerP2 = { x: 150, y: 185 }; //x, y+35
const leftLowerEnd = { x: 150, y: 220 }; //x, y+70

//small heart lower right
const rightLowerStart = { x: 150, y: 220 }; //x,y+70
const rightLowerP1 = { x: 150, y: 185 }; //x, y+35
const rightLowerP2 = { x: 200, y: 180 }; //x+50, y+30
const rightLowerEnd = { x: 200, y: 150 }; //x+50, y

//small heart upper right arc
const rightUpperStart = { x: 200, y: 150 }; //x+50,y
const rightUpperP1 = { x: 200, y: 120 }; //x+50, y-30
const rightUpperP2 = { x: 150, y: 120 }; //x, y-30
const rightUpperEnd = { x: 150, y: 150 }; //x, y

//draw the heart curve with bezierCurveTo
function drawCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
  ctx.moveTo(x0, y0);
  ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
  ctx.stroke();
}

//invoke the function, draw outer heart
//upper left
drawCurve(
  leftUpperStart.x,
  leftUpperStart.y,
  leftUpperP1.x,
  leftUpperP1.y,
  leftUpperP2.x,
  leftUpperP2.y,
  leftUpperEnd.x,
  leftUpperEnd.y
);
//lower left
drawCurve(
  leftLowerStart.x,
  leftLowerStart.y,
  leftLowerP1.x,
  leftLowerP1.y,
  leftLowerP2.x,
  leftLowerP2.y,
  leftLowerEnd.x,
  leftLowerEnd.y
);
//upper right
drawCurve(
  rightUpperStart.x,
  rightUpperStart.y,
  rightUpperP1.x,
  rightUpperP1.y,
  rightUpperP2.x,
  rightUpperP2.y,
  rightUpperEnd.x,
  rightUpperEnd.y
);
//lower right
drawCurve(
  rightLowerStart.x,
  rightLowerStart.y,
  rightLowerP1.x,
  rightLowerP1.y,
  rightLowerP2.x,
  rightLowerP2.y,
  rightLowerEnd.x,
  rightLowerEnd.y
);

//draw inner heart
drawCurve(
  leftUpperStart.x - 10,
  leftUpperStart.y - 10,
  leftUpperP1.x - 10,
  leftUpperP1.y - 10,
  leftUpperP2.x - 10,
  leftUpperP2.y - 10,
  leftUpperEnd.x - 10,
  leftUpperEnd.y - 10
);
drawCurve(
  leftLowerStart.x - 10,
  leftLowerStart.y - 10,
  leftLowerP1.x - 10,
  leftLowerP1.y - 10,
  leftLowerP2.x - 10,
  leftLowerP2.y - 10,
  leftLowerEnd.x - 10,
  leftLowerEnd.y - 10
);
drawCurve(
  rightUpperStart.x - 10,
  rightUpperStart.y - 10,
  rightUpperP1.x - 10,
  rightUpperP1.y - 10,
  rightUpperP2.x - 10,
  rightUpperP2.y - 10,
  rightUpperEnd.x - 10,
  rightUpperEnd.y - 10
);
drawCurve(
  rightLowerStart.x - 10,
  rightLowerStart.y - 10,
  rightLowerP1.x - 10,
  rightLowerP1.y - 10,
  rightLowerP2.x - 10,
  rightLowerP2.y - 10,
  rightLowerEnd.x - 10,
  rightLowerEnd.y - 10
);
