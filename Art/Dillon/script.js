let imgTag = new Image();
const canvas = document.querySelector("#mainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = visualViewport.width;
canvas.height = visualViewport.height;

let x = canvas.width;
let y = 0;
let speed = -6;

imgTag.onload = animateDragon;
imgTag.src = "\images/dragon.png";

function animateDragon() {
    //the direction that the dragon image is facing
    let dir;
    //if this is the first loop then set dir = 1
    if(dir === undefined)
        dir = 1;

    //clear the canvas before drawing the next frame
    ctx.clearRect(x, y, canvas.width, canvas.height);
    //draw the next frame in the x and y position
    ctx.drawImage(imgTag, x, y);

    //check if the image is off screen
    if (x <= -canvas.width && dir === 1 || x >= canvas.width && dir === -1) {
        //flip the direction of the image
        dir *=-1;
        ctx.scale(dir,1);
        ctx.translate(x,y);
        //move the image to the edge of canvas
        x = x >= canvas.width/2 ? canvas.width/2 : canvas.width;
    }
    
    //Increase the position and request the next animation frame
    x += speed;
    requestAnimationFrame(animateDragon);
}