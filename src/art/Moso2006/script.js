var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = 'destination-over';


var hue = 200;
var sizeSquare = 10;

const drawSqare = () =>{
    ctx.fillStyle = 'hsl( '+ hue +', 75%, 50%)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    var x = window.innerWidth/2 - sizeSquare/2;
    var y = window.innerHeight/2 - sizeSquare/2;
    
    //Draw Square
    ctx.rect(x,y,sizeSquare,sizeSquare);
    ctx.fill();
    ctx.stroke();

    //Rotate
    ctx.translate(window.innerWidth/2,window.innerHeight/2);
    ctx.rotate(Math.PI/180);
    ctx.translate(-window.innerWidth/2, -window.innerHeight/2);

    //Update stats
    hue-=2;
    sizeSquare+=4;
    requestAnimationFrame(drawSqare);
}
drawSqare();