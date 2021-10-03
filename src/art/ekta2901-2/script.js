var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d"); 
var colors = [
	{
        color:"#FF0000", 
        percentage:0
    },
	{
        color:"#FFFF00", 
        percentage:0.1
    },
	{
        color:"#00FF00", 
        percentage:0.3
    },
	{
        color:"#0000FF", 
        percentage:0.6
    },
	{
        color:"#FF00FF", 
        percentage:0.8
    },
	{
        color:"#FF0000", 
        percentage:1
    }
];
var text = "Hacktober Fest 2021";

function draw() {
    window.setTimeout(draw, 20);
    ctx.font =  "80px sans-serif" 
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    var x = (canvas.width/2);
    var y = (canvas.height/2);
    
    var gradient = ctx.createLinearGradient(canvas.width/2, 0, canvas.width/2, canvas.height);
    for (var i=0; i < colors.length; i++) {
        var color = colors[i];
        var percentage = color.percentage;
        gradient.addColorStop(percentage,color.color);
        percentage += .015;
        if (percentage > 1) {
            percentage = 0;
        }
        color.percentage = percentage;
        colors[i] = color;
    }	
    ctx.fillStyle = gradient;
    ctx.fillText(text, x, y);
}

draw()