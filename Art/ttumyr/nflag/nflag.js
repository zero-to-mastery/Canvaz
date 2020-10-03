const canvas = document.getElementById('canvas');

const jw = canvas.getContext('2d');
const canvasColors = document.querySelector('.colors');

const w = window.getComputedStyle(canvasColors).getPropertyValue('--white');
const r = window.getComputedStyle(canvasColors).getPropertyValue('--red');
const b = window.getComputedStyle(canvasColors).getPropertyValue('--blue');
const width = document.getElementById('canvas').offsetWidth;
const height = document.getElementById('canvas').offsetHeight;

//prettier-ignore
const drawObject = [
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [w,w,w,w,w,w,w,w,w,w,w,b,b,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],
    [w,w,w,w,w,w,w,w,w,w,w,b,b,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
    [r,r,r,r,r,r,r,r,r,r,w,b,b,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r],
];

const drawElement = (drawObject) => {
  const xChunk = width / drawObject[0].length;
  const yChunk = height / drawObject.length;
  let currentX = 0;
  let currentY = 0;

  drawObject.forEach((row) => {
    row.forEach((dot) => {
      jw.fillStyle = dot;
      jw.fillRect(currentX, currentY, xChunk, yChunk);
      currentX += xChunk;
    });
    currentY += yChunk;
    currentX = 0;
  });
  jw.stroke();
};
drawElement(drawObject);
