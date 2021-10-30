var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "60px Arial";
ctx.strokeText("Hacktoberfest 2021", 150, 250);

// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "brown");
gradient.addColorStop("0.2", "red");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("0.7", "brown");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Hacktoberfest 2021", 150, 250);