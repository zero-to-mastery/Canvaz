window.onload = function() {
  var drawing = document.getElementById('canv');
  var context = drawing.getContext('2d');
  context.strokeStyle = "#000";
  context.fillStyle = "#000";
  context.beginPath();
  context.moveTo(130, 130);
  context.lineTo(90, 60);
  context.lineTo(15, 180);
  context.lineTo(200,180);
  context.lineTo(220,150);
  context.lineTo(70,150);
  context.lineTo(107,90);
  context.fill();
  context.stroke();

  context.strokeStyle= "#000";
  context.fillStyle = "#FFF";
  context.beginPath();
  context.moveTo(82,130);
  context.lineTo(170,130);
  context.lineTo(90,0);
  context.lineTo(125,0);
  context.lineTo(220,150);
  context.lineTo(70,150);
  context.lineTo(82,130);
  context.fill();
  context.stroke();
  
  context.strokeStyle = "#000";
  context.fillStyle = "#9e9e9e";
  context.beginPath();
  context.moveTo(130,130);
  context.lineTo(170,130);
  context.lineTo(90,0);
  context.lineTo(0,150);
  context.lineTo(15,180);
  context.lineTo(90,60);
  context.lineTo(130,130);
  context.fill();
  context.stroke();
}
