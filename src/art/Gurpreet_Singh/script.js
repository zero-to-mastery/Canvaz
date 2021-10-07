var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'canvasOne',
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

var canvas = document.getElementById("canvasOne");
var context = canvas.getContext("2d");
function onDrawFrame(ctx, frame) {
  canvas.width = frame.width;
  canvas.height = frame.height;
  ctx.drawImage(frame.buffer, 0, 0);
  layer.draw();
}

gifler('https://i.gifer.com/XOsX.gif').frames(canvas, onDrawFrame);

var image = new Konva.Image({
  image: canvas,
});
layer.add(image);