const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("player");

const char = {
  w: 80,
  h: 80,
  x: 310,
  y: 150,
  speed: 2,
  dx: 0,
  dy: 0,
};
function move() {
  char.x += char.dx;
  char.y += char.dy;
  area();
}

function area() {
  if (char.x < 0) {
    char.x = 0;
  }

  if (char.x + char.w > canvas.width) {
    char.x = canvas.width - char.w;
  }

  if (char.y < 0) {
    char.y = 0;
  }
  if (char.y + char.h > canvas.height) {
    char.y = canvas.height - char.h;
  }
}
function showChar() {
  ctx.drawImage(image, char.x, char.y, char.w, char.h);
}
function setClaer() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}

function run() {
  setClaer();
  showChar();
  move();
  requestAnimationFrame(run);
}

function moveUp() {
  char.dy = -char.speed;
}
function moveDown() {
  char.dy = char.speed;
}

function moveRight() {
  char.dx = char.speed;
}
function moveLeft() {
  char.dx = -char.speed;
}

function keyDown(event) {
  if (event.key === "ArrowRight" || event.key === "Right") {
    moveRight();
  } else if (event.key === "ArrowLeft" || event.key === "Left") {
    moveLeft();
  } else if (event.key === "ArrowUp" || event.key === "Up") {
    moveUp();
  } else if (event.key === "ArrowDown" || event.key === "Down") {
    moveDown();
  }
}

function keyUp(event) {
  if (
    event.key == "Right" ||
    event.key == "ArrowRight" ||
    event.key == "Left" ||
    event.key == "ArrowLeft" ||
    event.key == "Up" ||
    event.key == "ArrowUp" ||
    event.key == "Down" ||
    event.key == "ArrowDown"
  ) {
    char.dx = 0;
    char.dy = 0;
  }
}
run();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
