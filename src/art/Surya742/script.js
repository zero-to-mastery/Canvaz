window.onload = function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#039dfc";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(220, 120, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.arc(400, 120, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = "#cc021d";
  ctx.beginPath();
  ctx.arc(580, 120, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = "#cc7402";
  ctx.beginPath();
  ctx.arc(308, 220, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = "#04913a";
  ctx.beginPath();
  ctx.arc(488, 220, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.font = "60px Arial";
  ctx.fillText("TOKYO OLYMPICS", 140, 400);
}