function $(ele) {
  return document.getElementById(ele.replace(/#/, ''));
}

var canvas = $('#canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var context = canvas.getContext('2d');

var start = function (coordinates) {
  context.beginPath();
  context.moveTo(coordinates.x, coordinates.y);
  this.isDrawing = true;
};

var move = function (coordinates) {
  if (this.isDrawing) {
    var grad = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop('0', '#b44699');
    grad.addColorStop('0.5', '#dadd27');
    grad.addColorStop('1.0', '#0047b3');
    context.strokeStyle = grad;
    context.lineJoin = 'round';
    context.lineWidth = 3;
    context.lineTo(coordinates.x, coordinates.y);
    context.stroke();
  }
};

var stop = function (coordinates) {
  if (this.isDrawing) {
    this.touchmove(coordinates);
    this.isDrawing = false;
  }
};

var drawer = {
  isDrawing: false,
  mousedown: start,
  mousemove: move,
  mouseup: stop,
  touchstart: start,
  touchmove: move,
  touchend: stop
};

var chalk = function (e) {
  var coordinates = {
    x: e.clientX || e.targetTouches[0].pageX,
    y: e.clientY || e.targetTouches[0].pageY
  };
  drawer[e.type](coordinates);
};

canvas.addEventListener('mousedown', chalk, false);
canvas.addEventListener('mousemove', chalk, false);
canvas.addEventListener('mouseup', chalk, false);
canvas.addEventListener('touchstart', chalk, false);
canvas.addEventListener('touchmove', chalk, false);
canvas.addEventListener('touchend', chalk, false);

var board = function (e) {
  this.parentNode.removeChild(this);
  chalk(e);
};

$('#board').addEventListener('mousedown', board, false);
$('#board').addEventListener('touchstart', board, false);

document.body.addEventListener(
  'touchmove',
  function (e) {
    e.preventDefault();
  },
  false
);

window.onresize = function (e) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
};
