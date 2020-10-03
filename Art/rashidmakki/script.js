var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var buttonUp = document.getElementById('buttonUp');
var buttonDown = document.getElementById('buttonDown');
var buttonLeft = document.getElementById('buttonLeft');
var buttonRight = document.getElementById('buttonRight');
var buttonNext = document.getElementById('buttonNext');

var data = [
  {
    color: 'rgb(255,128,0)',
    position: [0, 0],
    segments: [
      [
        [-1, -1],
        [1, -1]
      ],
      [
        [1, -1],
        [1, 1]
      ],
      [
        [1, 1],
        [-1, 1]
      ],
      [
        [-1, 1],
        [-1, -1]
      ]
    ]
  },
  {
    color: 'rgb(255,0,0)',
    position: [0, 0],
    segments: [
      [
        [-1, -1],
        [1, -1]
      ],
      [
        [1, -1],
        [0, 1]
      ],
      [
        [0, 1],
        [-1, -1]
      ]
    ]
  },
  {
    color: 'rgb(0,128,255)',
    position: [0, 0],
    segments: [
      [
        [-1, 0],
        [0, 1]
      ],
      [
        [0, 1],
        [1, 0]
      ],
      [
        [1, 0],
        [0, -1]
      ],
      [
        [0, -1],
        [-1, 0]
      ]
    ]
  }
];

var dataIdx = 0;

var move = function (direction) {
  data[dataIdx].position[0] += direction[0];
  data[dataIdx].position[1] += direction[1];
  redraw();
};

var createAction = function (callbackFunction, callbackArg) {
  var direction = callbackArg;
  var action = callbackFunction;
  return function (evt) {
    console.log(evt); // for tests only
    action(direction);
  };
};

// screen parameters: screen displays the rectangle [rminx,rmaxx] x [rminy,rmaxy] of R x R
var rminx = -5;
var rmaxx = 5;
var rminy = -5;
var rmaxy = 5;

// (rx(ctx,x), ry(ctx,y)) is the pixel corresponding to (x,y) on ctx.canvas

var rx = function (ctx, x) {
  return ((x - rminx) / (rmaxx - rminx)) * ctx.canvas.width;
};

var ry = function (ctx, y) {
  return (
    ctx.canvas.height - ((y - rminy) / (rmaxy - rminy)) * ctx.canvas.height
  );
};

// draw segment on screen
var rDrawSegment = function (ctx, x1, y1, x2, y2) {
  ctx.moveTo(rx(ctx, x1), ry(ctx, y1));
  ctx.lineTo(rx(ctx, x2), ry(ctx, y2));
};

// background
var bgColor = 'rgb(0,0,0)';

// drawing

var draw = function (ctx, dataObject) {
  ctx.strokeStyle = dataObject.color;
  var i;
  ctx.beginPath();
  for (i = 0; i < dataObject.segments.length; i++) {
    rDrawSegment(
      ctx,
      dataObject.segments[i][0][0] + dataObject.position[0],
      dataObject.segments[i][0][1] + dataObject.position[1],
      dataObject.segments[i][1][0] + dataObject.position[0],
      dataObject.segments[i][1][1] + dataObject.position[1]
    );
  }
  ctx.stroke();
};

var clearScreen = function (ctx, bgColorString) {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = bgColorString;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

var redraw = function () {
  // ctx, data, bgColor - globalne
  clearScreen(ctx, bgColor);
  ctx.lineWidth = 1;
  var i;
  for (i = 0; i < data.length; i++) draw(ctx, data[i]);
  ctx.lineWidth = 2;
  draw(ctx, data[dataIdx]);
  ctx.lineWidth = 1;
};

onload = function () {
  console.log(ctx); // for tests

  redraw(); // initial redraw

  buttonNext.onclick = function (evt) {
    console.log(evt); // for tests only
    dataIdx = (dataIdx + 1) % data.length;
    redraw();
  };

  buttonUp.onclick = createAction(move, [0, 1]);
  buttonDown.onclick = createAction(move, [0, -1]);
  buttonLeft.onclick = createAction(move, [-1, 0]);
  buttonRight.onclick = createAction(move, [1, 0]);
};
