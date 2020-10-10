var xpos = 0;

var ypos = 0;

var canvas;

var canvasContext;

var speedx = 3;

var speedy = 3;

var paddle1 = 100;

var paddle2 = 100;

var playerscore1 = 0;

var playerscore2 = 0;

const PADDLE_HEIGHT = 100;

const PADDLE_THICKNESS = 10;

function computerMovement() {
  var paddle2Center = paddle2 + PADDLE_HEIGHT / 2;

  if (paddle2Center < ypos - 35) {
    paddle2 = paddle2 + 10;
  } else if (paddle2Center > ypos + 35) {
    paddle2 = paddle2 - 10;
  }
}

function reset() {
  speedx = speedx * -1;

  xpos = canvas.width / 2;

  ypos = canvas.height / 2;
}

function calculateMouse(evt) {
  var rect = canvas.getBoundingClientRect();

  var root = document.documentElement;

  var mousex = evt.clientX - rect.left - root.scrollLeft;

  var mousey = evt.clientY - rect.top - root.scrollTop;

  return {
    x: mousex,

    y: mousey
  };
}

window.onload = function () {
  canvas = document.getElementById('jude');

  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 60;

  setInterval(function () {
    move();
    draw();
  }, 1000 / framesPerSecond);

  canvas.addEventListener('mousemove', function (evt) {
    var mousepos = calculateMouse(evt);

    paddle1 = mousepos.y - PADDLE_HEIGHT / 2; //gives position relative to middleof paddle
  });
};

function drawNet() {
  for (var i = 0; i < canvas.height; i += 40) {
    constructRect(canvas.width / 2 - 1, i, 2, 20, 'white');
  }
}

function move() {
  computerMovement();

  xpos += speedx;

  if (xpos > canvas.width) {
    if (ypos > paddle2 && ypos < paddle2 + PADDLE_HEIGHT) {
      speedx = speedx * -1;

      var angle2 = ypos - (paddle2 + PADDLE_HEIGHT / 2);

      speedy = angle2 * 0.35;
    } else {
      reset();

      playerscore1 += 1;
    }
  }

  if (xpos < 0) {
    if (ypos > paddle1 && ypos < paddle1 + PADDLE_HEIGHT) {
      speedx = speedx * -1;

      var angle1 = ypos - (paddle1 + PADDLE_HEIGHT / 2);

      speedy = angle1 * 0.35;
    } else {
      reset();

      playerscore2 += 1;
    }
  }

  ypos += speedy;

  if (ypos > canvas.height) {
    speedy = -speedy;
  }

  if (ypos < 0) {
    speedy = speedy * -1;
  }
}

function draw() {
  //this is canvas

  constructRect(0, 0, canvas.width, canvas.height, 'black'); //canvas

  constructRect(0, paddle1, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white'); //user paddle

  //computerpaddle

  constructRect(
    canvas.width - PADDLE_THICKNESS,
    paddle2,
    PADDLE_THICKNESS,
    PADDLE_HEIGHT,
    'white'
  );

  constructCircle(xpos, ypos, 10, 0, Math.PI * 2, true);

  canvasContext.fillText(playerscore1, canvas.width / 2 - 100, 10);

  canvasContext.fillText(playerscore2, canvas.width / 2 + 100, 10);

  drawNet();
}

function constructCircle(x, y, rad, s, pi, bool) {
  canvasContext.beginPath();

  canvasContext.arc(x, y, rad, s, pi, bool);

  canvasContext.fill();
}

function constructRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;

  canvasContext.fillRect(x, y, width, height);
}
