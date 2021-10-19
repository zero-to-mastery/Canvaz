$(function () {

  var canvas = document.getElementById('myCanvas');
  canvas.width = window.innerWidth - 40;
  canvas.height = window.innerHeight / 2;

  canvas.addEventListener('mousedown', function (e) {
    getCursorPosition(canvas, e);
  });

  function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    drawStar(x, y);
  }

  function drawStar(xPos, yPos) {
    $('#myCanvas').drawPolygon({
      fillStyle: getRandomColor(),
      x: xPos,
      y: yPos,
      radius: 30,
      sides: 5,
      concavity: 0.5,
    });
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function clearCanvas() {
    $('myCanvas').clearCanvas;
  }
  $('#clearButton').on('click', function () {
    $('#myCanvas').clearCanvas();
  });

});
