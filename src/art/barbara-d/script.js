/** @type {HTMLCanvasElement} */

//get canvas and create context
const canvas = document.getElementById("mainCanvas");
const c = canvas.getContext('2d');

//fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create a regular 5 point star
function basicStar(x, y, r, n) {
    c.save();
    c.beginPath();
    c.translate(x, y);
    c.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        c.rotate(Math.PI / n);
        c.lineTo(0, 0 - (r*2));
        c.rotate(Math.PI / n);
        c.lineTo(0, 0 - r);
    }
    c.closePath();
    c.fill();
    c.stroke();
    c.restore();
}

//create a star with random position, size and grayscale color
function tripleStar(){
    let posX = Math.random()*window.innerWidth;
    let posY = Math.random()*window.innerHeight;
    let rad = Math.floor(Math.random() * (100 - 30 + 1) + 30);
    let gray = Math.floor(Math.random() * (180 - 16 + 1) + 16);

    c.strokeStyle = "rgb(" + gray + "," + gray + "," + gray +")"
    c.fillStyle = 'white';
    c.lineWidth = rad/6;
    
//render star three times reducing radius
    for (j=0; j<=3; j++)
    {
        basicStar(posX,posY, rad, 5);
        rad = rad/(j+1);
    }
}

//stop generating
let stop = false;

//reduce animation speed
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    console.log(startTime);
    animate();
}

//generate elements
function animate(newtime) {
    if (stop) {
        return;
    }
    requestAnimationFrame(animate);
    now = newtime;
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        
    tripleStar();
}}

//call animation functions
startAnimating(15);
animate();

//reset animation on click
canvas.addEventListener('click', (e) => {
    c.clearRect(0,0, innerWidth, innerHeight);
    stop = false;
    animate();
});

//stop animating on right click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('test')
    stop = true;
});

