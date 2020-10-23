const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = document.getElementById('source');

const plr = {
  w: 50,
  h: 70,
  x: 20,
  y: 60,
  speed: 10,
  dx: 0,
  dy: 0
};

function drawplr() {
  ctx.drawImage(image, plr.x, plr.y, plr.w, plr.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  plr.x += plr.dx;
  plr.y += plr.dy;

  detectWalls();
}

function detectWalls() {
  // Left wall
  if (plr.x < 0) {
    plr.x = 0;
  }

  // Right Wall
  if (plr.x + plr.w > canvas.width) {
    plr.x = canvas.width - plr.w;
  }

  // Top wall
  if (plr.y < 0) {
    plr.y = 0;
  }

  // Bottom Wall
  if (plr.y + plr.h > canvas.height) {
    plr.y = canvas.height - plr.h;
  }
}

function update() {
  clear();

  drawplr();

  newPos();

  requestAnimationFrame(update);
}

function moveUp() {
  plr.dy = -plr.speed;
}

function moveDown() {
  plr.dy = plr.speed;
}

function moveRight() {
  plr.dx = plr.speed;
}

function moveLeft() {
  plr.dx = -plr.speed;
}

function keyDown(e) {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    plr.dx = 0;
    plr.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
