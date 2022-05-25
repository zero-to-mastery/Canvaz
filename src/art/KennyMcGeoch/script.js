var cauldron = new Image();
var witch = new Image();
function init() {
cauldron.src = 'cauldron.jpg';
witch.src = 'witch.jpg';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 1000, 1000); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(500, 500);


  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 30) * time.getSeconds() + ((2 * Math.PI) / 30000) * time.getMilliseconds());
  ctx.translate(150, 150);
  ctx.drawImage(witch, -12, -12);

  ctx.restore();

  ctx.drawImage(cauldron, 350, 350, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
