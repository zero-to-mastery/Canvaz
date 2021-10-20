function draw1() {
  var canvas = document.getElementById("canvas1");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(40, 100);
    ctx.lineTo(75, 125);
    ctx.lineTo(40, 150);
    ctx.fillStyle = "rgb(255,153,51)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(85, 125);
    ctx.lineTo(50, 150);
    ctx.fillStyle = "rgb(255,153,51)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(70, 100);
    ctx.lineTo(105, 125);
    ctx.lineTo(70, 150);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(80, 100);
    ctx.lineTo(115, 125);
    ctx.lineTo(80, 150);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(125, 125);
    ctx.lineTo(100, 150);
    ctx.fillStyle = "rgb(19, 136, 8)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(135, 125);
    ctx.lineTo(110, 150);
    ctx.fillStyle = "rgb(19, 136, 8)";
    ctx.fill();
  }
}
function draw2() {
  var ctx = document.getElementById("canvas2").getContext("2d");

  var gradient = ctx.createLinearGradient(0, 0, 150, 100);
  gradient.addColorStop(0, "rgb(255,153,51)");
  gradient.addColorStop(0.5, "rgb(255, 255,255)");
  gradient.addColorStop(1, "rgb(19, 136, 8)");
  ctx.fillStyle = gradient;
  ctx.font = "6.4rem sans-serif";
  ctx.fillText("INDIA", 10, 50);
}

function draw3() {
  var canvas = document.getElementById("canvas3");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(40, 100);
    ctx.lineTo(75, 125);
    ctx.lineTo(40, 150);
    ctx.fillStyle = "rgb(221, 44, 0)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(65, 125);
    ctx.lineTo(100, 150);
    ctx.fillStyle = "rgb(221, 44, 0)";
    ctx.fill();
  }
}
function draw4() {
  var canvas = document.getElementById("canvas4");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var grad = ctx.createRadialGradient(200, 350, 0, 200, 200, 200);
    grad.addColorStop("0", "red");
    grad.addColorStop(".25", "magenta");
    grad.addColorStop(".75", "pink");
    grad.addColorStop("1", "orange");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 185, 195);
  }
}

draw1();
draw2();
draw3();
draw4();
