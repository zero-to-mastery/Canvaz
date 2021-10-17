/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("mainCanvas");
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = 'lightblue';
//x position, y position, width, height
//c.fillRect(100, 200, 150, 100);
// ctx.clearRect(150, 100, 200, 200);

//line
/* c.strokeStyle = 'lightblue';
c.beginPath();
c.moveTo(250, 200);
c.lineTo(300, 300);
c.lineTo(250, 300);
c.stroke();
 */

//arc

//drawing randomly spaced circles and stars
/* for (i=0; i<10; i++){
    let posX = Math.random()*window.innerWidth;
    let posY = Math.random()*window.innerHeight;
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    c.beginPath();
    c.strokeStyle = 'lightblue';
    star(posX,posY, 20, 5, 2);
    c.beginPath();
    c.arc(x, y, 40, 0, Math.PI*2, false);
    c.stroke();
} */

function basicStar(x, y, r, n, inset) {
    c.save();
    c.beginPath();
    c.translate(x, y);
    c.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        c.rotate(Math.PI / n);
        c.lineTo(0, 0 - (r*inset));
        c.rotate(Math.PI / n);
        c.lineTo(0, 0 - r);
    }
    c.closePath();
    c.fill();
    c.stroke();
    c.restore();
}
function tripleStar(){
    let posX = Math.random()*window.innerWidth;
    let posY = Math.random()*window.innerHeight;
    let rad = Math.floor(Math.random() * (100 - 30 + 1) + 30);
    let gray = Math.floor(Math.random() * (180 - 16 + 1) + 16);

    c.strokeStyle = "rgb(" + gray + "," + gray + "," + gray +")"
    c.fillStyle = 'white';
    c.lineWidth = rad/6;
    for (j=0; j<4; j++)
    {
        basicStar(posX,posY, rad, 5, 2);
        rad = rad/(j+1);
    }
}


let stop = false;
let frameCount = 0;
let fpsInterval, startTime, now, then, elapsed;

startAnimating(15);

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    console.log(startTime);
    animate();
}


function animate(newtime) {
    // stop
    if (stop) {
        return;
    }
    requestAnimationFrame(animate);
    now = newtime;
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

    //to clear the whole canvas
    // c.clearRect(0,0, innerWidth, innerHeight);
   
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    c.beginPath();
    tripleStar();
    // c.beginPath();
    // c.strokeStyle = 'lightblue';
    // c.arc(x, y, 40, 0, Math.PI*2, false);
    // c.stroke();
    
}}

animate();

canvas.addEventListener('click', (e) => {
    c.clearRect(0,0, innerWidth, innerHeight)
});
document.addEventListener('contextmenu', (e) => {
    console.log('test')
    stop = true;
})

