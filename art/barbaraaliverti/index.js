var canvas = document.getElementById("myCanvas");
var background = canvas.getContext("2d");
background.fillStyle = "black";
background.fillRect(0,0,1000,1000);

var width = 1000;
var height = 1000;

draw();

function draw() {
	let i = 0;
	let j = 0;
	
	while (j <= height) {
		i = 0;
		while (i <= width) {
			var line = canvas.getContext("2d");
			line.strokeStyle = "#98DDCB";
			line.moveTo(500,j);
			line.lineTo(i, height/2);
			line.stroke();
			i += 50;
		}
		j+= 50;		
	}		
}