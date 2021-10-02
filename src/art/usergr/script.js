var canvas = null;				
var context = null;				
var bufferCanvas = null;		
var bufferCanvasCtx = null;		
var flakeArray = [];			
var flakeTimer = null;			
var maxFlakes = 1000;			

function Flake() {
    this.x = Math.round(Math.random() * context.canvas.width);
    this.y = -10;
    this.drift = Math.random();
    this.speed = Math.round(Math.random() * 3) + 1;
    this.width = (Math.random() * 5) + 5;
    this.height = this.width;
}

function init() {
    canvas = document.getElementById('CanvasCont');
    context = canvas.getContext("2d");

    // Build the off-screen canvas and get its context
    bufferCanvas = document.createElement("canvas");
    bufferCanvasCtx = bufferCanvas.getContext("2d");
    bufferCanvasCtx.canvas.width = context.canvas.width;
    bufferCanvasCtx.canvas.height = context.canvas.height;

    // initialize the flake objects
    flakeTimer = setInterval(addFlake, 200);

    // draw the initial canvas state
    draw();

    requestAnimationFrame(animate);
}

function addFlake() {
    flakeArray[flakeArray.length] = new Flake();
    if (flakeArray.length == maxFlakes) {
        clearInterval(flakeTimer);
    }
}

function blank() {
    bufferCanvasCtx.fillStyle = "black";
    bufferCanvasCtx.fillRect(0, 0, bufferCanvasCtx.canvas.width, bufferCanvasCtx.canvas.height);
}

function animate() {
    blank();
    update();
    draw();
    requestAnimationFrame(animate);
}

function update() {
    for (var i = 0; i < flakeArray.length; i++) {
        if (flakeArray[i].y < context.canvas.height) {
            flakeArray[i].y += flakeArray[i].speed;
            if (flakeArray[i].y > context.canvas.height)
                flakeArray[i].y = -5;
            flakeArray[i].x += flakeArray[i].drift;
            if (flakeArray[i].x > context.canvas.width)
                flakeArray[i].x = 0;
        }
    }
}

function draw() {
    context.save();
    // draw each one of the updated snowflakes
    for (var i = 0; i < flakeArray.length; i++) {
        bufferCanvasCtx.fillStyle = "white";
        bufferCanvasCtx.fillRect(flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height);
    }
    // copy the entire rendered image from the buffer canvas to the visible one
    context.drawImage(bufferCanvas, 0, 0, bufferCanvas.width, bufferCanvas.height);
    context.restore();
}

window.addEventListener("load", init)