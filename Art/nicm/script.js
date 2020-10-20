//Stars and ground canvas
const canvas1 = document.querySelector('#canvas1');
const ctxBkg = canvas1.getContext("2d");

ctxBkg.canvas.width = window.innerWidth;
ctxBkg.canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  ctxBkg.canvas.width = window.innerWidth;
  ctxBkg.canvas.height = window.innerHeight;
  //Re-add the stars
  ctxBkg.clearRect(0, 0, canvas1.width, canvas1.height);
  stars();
});

//Fireworks canvas
const canvas2 = document.querySelector('#canvas2');
const ctx = canvas2.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
});

let randomFireworks = getRandomIntInclusive(5,10);

//Add all the elements
stars();
fireworks();

function stars() {
  //Add stars to a small fraction of the canvas
  const canvasSize = ctxBkg.canvas.width * ctxBkg.canvas.height;
  const stars = canvasSize / 10000;

  for(let i = 0; i < stars; i++) {
    //Set up random elements
    let xPos = random(2, ctxBkg.canvas.width - 2);
    let yPos = random(2, ctxBkg.canvas.height - 2);
    let alpha = random(.5, 1);
    let size = random(1, 2);

    //Add stars
    ctxBkg.fillStyle = '#ffffff';
    ctxBkg.globalAlpha = alpha;
    ctxBkg.fillRect(xPos, yPos, size, size);
  }
}

function fireworks() {
  let particles = [];
  const startX = random(10, canvas2.width - 10);
  const startY = random(10, canvas2.height - 100);
  const colour = '#' + Math.random().toString(16).substr(2, 6);
  let alpha = random(0.5, 1);
  drawFireworks();

  function drawFireworks() {
    let p = {
      x: startX,
      y: startY,
      xVel: random(-2, 2),
      yVel: random(0.1, 4)
    }
    particles.push(p);

    for (let i = 0; i < particles.length; i++) {
      p = particles[i];
      ctx.fillStyle = colour;
      ctx.globalAlpha = alpha;
      ctx.fillRect(p.x, p.y, 2, 2);
      p.x += p.xVel;
      p.y += p.yVel;
    }

    if (alpha >= 0.1) {
      alpha -= 0.01;
      window.requestAnimationFrame(drawFireworks);
    } else {
      window.cancelAnimationFrame(drawFireworks);
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      fireworks();
    }
  
  }
}

function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}