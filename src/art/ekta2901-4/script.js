const canvas = document.getElementById('my-canvas');
let width = window.innerWidth;
canvas.setAttribute('width',width);
const ctx = canvas.getContext('2d');

let x = 0, y = 0;
drawBoat(x,y);
animate();

function drawBoat(x){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'brown';
    ctx.strokeStyle = 'brown';

    ctx.beginPath();
    ctx.moveTo(0+x,100);
    ctx.lineTo(30+x,150);
    ctx.lineTo(200+x,150);
    ctx.lineTo(230+x,100);
    ctx.moveTo(100+x,100);
    ctx.lineTo(110+x,0);
    ctx.fill();

    ctx.moveTo(140+x,100);
    ctx.lineTo(110+x,0);
    ctx.moveTo(0+x,100);
    ctx.lineTo(110+x,0);
    ctx.lineTo(0+x,100);
    ctx.lineTo(230+x,100);
    ctx.lineTo(140+x,0);
    ctx.lineTo(140+x,100);
    ctx.closePath();
    ctx.stroke();
}

function animate() {
    setInterval(()=> {
        if(x >= width){
            x = 0;
        }
        x = x+2;
        drawBoat(x);
    },50);
}
