// var c = document.getElementById('my_canvas');
// var ctx = c.getContext('2d');
// ctx.beginPath();
// ctx.arc(600, 250, 200, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(500, 250, 200, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.font = '50px Arial';
// ctx.strokeText('Hello Canvas', 10, 50);

// ctx.beginPath();
// ctx.arc(700, 250, 200, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(700, 250, 200, 0, 2 * Math.PI);
// ctx.stroke();

window.addEventListener('DOMContentLoaded', function () {
  var image = document.getElementById('html5');
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  canvas.width = image.width;
  canvas.height = image.height;

  var context = canvas.getContext('2d');

  context.drawImage(image, 0, 0, 50, 50);
});
