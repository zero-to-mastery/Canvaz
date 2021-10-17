$(function () {

  var canvas = document.getElementById('myCanvas');
  canvas.width = window.innerWidth - 40;
  canvas.height = window.innerHeight / 2;

  canvas.addEventListener('mousemove', function (e) {
    getCursorPosition(canvas, e);
  });

  $('#myCanvas').setEventHooks({
    add: function (layer) {
      // code to run whenever a layer is added
      $(this).animateLayer(
        layer,
        {
          fillStyle: getRandomColor(),
          x: canvas.width,
          y: 0,
          rotate: 180,
        },
        500,
        (l) => {
          $(this).removeLayer(l.name);
        }
      );
    },
  });

  function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    drawStar(x, y);
  }

  var drawStar = function (xPos, yPos) {
    $('#myCanvas').drawPolygon({
      fillStyle: getRandomColor(),
      x: xPos,
      y: yPos,
      radius: 20,
      sides: 5,
      concavity: 0.5,
      name: 'star' + xPos + yPos,
      layer: true,
      draggable: true,
      bringToFront: true,
    });
  };

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

});
