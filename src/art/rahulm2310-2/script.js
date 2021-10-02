var canvas, ctx;
canvas = document.getElementById('my-canvas');
ctx = canvas.getContext('2d');

drawBoard({
  top: 0,
  left: 0
}, 400);

var btn = document.getElementById('random-btn');
btn.addEventListener('click', function(){
  drawBoard({
    top: 0,
    left: 0
  }, 400);
})

function getRandomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function drawBoard(pos, size) {
  var size_of_block = size / 8;

  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      ctx.fillStyle = getRandomColor()
      var posX = pos.left + (size_of_block * i);
      var posY = pos.top + (size_of_block * j);
      ctx.fillRect(posX, posY, size_of_block, size_of_block);
    }
  }
}