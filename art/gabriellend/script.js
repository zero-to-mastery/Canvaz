let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

const init = () => {
  ctx.clearRect(75, 75, 150, 150);
  ctx.beginPath();
  ctx.arc(150, 150, 60, (Math.PI/180)*40, (Math.PI/180)*320);
  ctx.bezierCurveTo(80, 50, 80, 250, 197, 188);
  ctx.fillStyle = 'white';
  ctx.fill();

  setTimeout(quarterMoon, 1000);
};

const quarterMoon = () => {
  ctx.clearRect(75, 75, 150, 150);
  ctx.beginPath();
  ctx.arc(150, 150, 60, (Math.PI/180)*40, (Math.PI/180)*320);
  ctx.bezierCurveTo(110, 75, 110, 225, 196, 188);
  ctx.fillStyle = 'white';
  ctx.fill();

  setTimeout(halfMoon, 125);
};

const halfMoon = () => {
  ctx.clearRect(75, 75, 150, 150);
  ctx.beginPath();
  ctx.arc(150, 150, 60, (Math.PI/180)*30, (Math.PI/180)*330);
  ctx.bezierCurveTo(140, 110, 140, 190, 201, 182);
  ctx.fillStyle = 'white';
  ctx.fill();

  setTimeout(fullMoon, 125);
};

const fullMoon = () => {
  ctx.clearRect(75, 75, 150, 150);
  ctx.beginPath();
  ctx.arc(150, 150, 60, (Math.PI/180)*30 , (Math.PI/180)*390);
  ctx.fillStyle = 'white';
  ctx.fill();

  setTimeout(halfMoonWane, 1000);
};

const halfMoonWane = () => {
  ctx.clearRect(75, 75, 150, 150);
  ctx.beginPath();
  ctx.arc(150, 150, 60, (Math.PI/180)*30, (Math.PI/180)*330);
  ctx.bezierCurveTo(140, 110, 140, 190, 201, 182);
  ctx.fillStyle = 'white';
  ctx.fill();

  setTimeout(quarterMoonWane, 125);
};

const quarterMoonWane = () => {
  ctx.clearRect(75, 75, 150, 150);
  ctx.beginPath();
  ctx.arc(150, 150, 60, (Math.PI/180)*40, (Math.PI/180)*320);
  ctx.bezierCurveTo(110, 75, 110, 225, 196, 188);
  ctx.fillStyle = 'white';
  ctx.fill();

  setTimeout(init, 125);
};
