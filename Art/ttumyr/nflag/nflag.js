const canvas = document.getElementById('canvas');
const cs = canvas.getContext('2d');
const cssColors = document.querySelector('.colors');
const canvasVars = {
  //colors
  white: window.getComputedStyle(cssColors).getPropertyValue('--white'),
  red: window.getComputedStyle(cssColors).getPropertyValue('--red'),
  blue: window.getComputedStyle(cssColors).getPropertyValue('--blue'),
  offRed: window.getComputedStyle(cssColors).getPropertyValue('--offRed'),
  offBlue: window.getComputedStyle(cssColors).getPropertyValue('--offBlue'),
  //dimensions
  width: document.getElementById('canvas').offsetWidth,
  height: document.getElementById('canvas').offsetHeight
};
//prettier-ignore
const drawObject = [
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['w','w','w','w','w','w','w','w','w','w','w','b','b','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'],
    ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'],
    ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'],
    ['w','w','w','w','w','w','w','w','w','w','w','b','b','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
    ['r','r','r','r','r','r','r','r','r','r','w','b','b','w','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
];
const drawFlag = (color1, color2) => {
  const flag = {
    r: color1 || canvasVars['offRed'],
    b: color2 || canvasVars['offBlue'],
    w: canvasVars['white'],
    width: canvasVars['width'],
    height: canvasVars['height']
  };
  cs.clearRect(0, 0, flag['width'], flag['height']);
  const drawElement = (drawObject) => {
    const xChunk = flag['width'] / drawObject[0].length;
    const yChunk = flag['height'] / drawObject.length;
    let currentX = 0;
    let currentY = 0;
    drawObject.forEach((row) => {
      row.forEach((dot) => {
        cs.fillStyle = flag[dot];
        cs.fillRect(currentX, currentY, xChunk, yChunk);
        currentX += xChunk;
      });
      currentY += yChunk;
      currentX = 0;
    });
    currentY = 0;
  };
  drawElement(drawObject);
};
// event listeners
canvas.addEventListener(
  'mouseover',
  drawFlag.bind(this, (r = canvasVars['red']), (b = canvasVars['blue']))
);
canvas.addEventListener(
  'mouseleave',
  drawFlag.bind(this, (r = canvasVars['offRed']), (b = canvasVars['offBlue']))
);
// init
drawFlag();
