var c = document.getElementById("ppie");
var plate = c.getContext("2d");
plate.beginPath();
plate.arc(c.width/2,c.height/2,130,0,2*Math.PI);
plate.lineWidth = 2;
plate.strokeStyle = 'gold';
plate.fillStyle = 'silver';
plate.fill();
plate.stroke();

var wedge = c.getContext("2d");
wedge.beginPath();
wedge.moveTo(c.width/2*.73,c.height/2);
wedge.arc(c.width/2*.73,c.height/2,130,-.1*Math.PI,.1*Math.PI);
wedge.closePath();
wedge.lineWidth = 2;
wedge.strokeStyle = '#9f7003';
wedge.fillStyle = '#d09117';
wedge.fill();
wedge.stroke();

var crust = c.getContext("2d");
crust.moveTo(c.width/2*.73,c.height/2);
crust.beginPath();
crust.arc(c.width/2*.73,c.height/2,130,-.1*Math.PI,.1*Math.PI);
crust.lineWidth = 10;
crust.strokeStyle = '#9f7003';
wedge.stroke();

var cream = c.getContext("2d");
cream.moveTo(c.width/2*1.1,c.height/2);
cream.beginPath();
cream.arc(c.width/2*1.1,c.height/2,15,0,2*Math.PI);
cream.closePath();
cream.lineWidth = 2;
cream.strokeStyle = 'white';
cream.fillStyle = '#e8e1f2';
cream.fill();
cream.stroke();

var dataURL = canvas.toDataURL();
document.getElementById('ppie').src = dataURL;
