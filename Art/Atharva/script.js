function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        ctx.strokeStyle =
          'rgb(0, ' +
          Math.floor(255 - 42.5 * i) +
          ', ' +
          Math.floor(255 - 42.5 * j) +
          ')';
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }
  }
}
