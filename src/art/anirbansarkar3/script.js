function clock() {
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  //ctx.clearRect(200, 200, 150, 150);
  ctx.translate(250, 200);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
 

  var sec = now.getSeconds();

 
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = '#D40000';
 
  ctx.beginPath();
  ctx.arc(350, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);