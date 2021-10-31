const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const particleArray = [];
let ref=null;
let hue=Math.random()*10;
const mouse = {
    x: undefined,
    y:undefined,
}
class Particle{
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3-1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue},100%,50%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
            this.size -= 0.1;
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function createParticles() {
    for (let i = 0; i <= 5; i++){
        particleArray.push(new Particle());
    }
}
function handleParticles() {
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        for (let j = i; j < particleArray.length; j++){
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particleArray[i].color;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particleArray[i].x, particleArray[i].y);
                ctx.lineTo(particleArray[j].x, particleArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if (particleArray[i].size <= 0.3) {
            particleArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    ref = window.requestAnimationFrame(animate);
    hue+=1;
}
animate();
window.addEventListener('load', () => {   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    createParticles();
    if (!ref) {
        animate();
    }
});
canvas.addEventListener('mouseout', function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.cancelAnimationFrame(ref);
    ref = null;
});


