const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
c.globalCompositeOperation = 'destination-over';
hue = 999;

let number = 0;
let scale = 10;

function drawFlower() {
    let angle = number * 0.6;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    c.fillStyle = 'hsl('+ hue + ' , 100%, 50%)';
    c.strokeStyle = '#3e3773';
    c.lineWidth = 4;
    c.beginPath();
    c.arc(positionX, positionY, number, 0, Math.PI * 2);
    c.closePath();
    c.fill();
    c.stroke();

    number++
    hue+=0.5;
}


function animate() {
    //c.clearRect(0,0, canvas.width, canvas.height)

    
    drawFlower();
    if (number > 100) return;
    requestAnimationFrame(animate);
    }
animate();