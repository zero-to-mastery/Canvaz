const draw = () => {
  let canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    let moonBlue = '#182B4E';

    ctx.beginPath();
    ctx.arc(150, 150, 60, (Math.PI/180)*40, (Math.PI/180)*320);
    //create a loop to go up and down phases
    ctx.bezierCurveTo(80, 50, 80, 250, 196, 188);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.arc(150, 150, 60, (Math.PI/180)*40, (Math.PI/180)*320);
    //create a loop to go up and down phases
    ctx.bezierCurveTo(80, 50, 80, 250, 196, 188);
    ctx.fillStyle = 'white';
    ctx.fill();
    // ctx.save();

    // clearRect();

    // ctx.beginPath();
    // ctx.arc(150, 150, 60, (Math.PI/180)*40, (Math.PI/180)*320);
    // ctx.bezierCurveTo(150, 50, 150, 250, 196, 188);
    // ctx.strokeStyle = 'white';
    // ctx.stroke();
    // ctx.save();
  }
}

// setInterval(draw, 1000);