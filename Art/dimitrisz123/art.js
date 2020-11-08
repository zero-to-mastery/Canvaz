var canvas=document.getElementById("myCanvas");
var context=canvas.getContext('2d');
drawing = new Image();
drawing.src = "osfp.png"; // can also be a remote URL e.g. http://
drawing.onload = function() {
   context.drawImage(drawing,0,0);
};