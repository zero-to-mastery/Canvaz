const canvas = document.getElementById('art');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const ctx = canvas.getContext('2d');

let hue = 0;
const mouse = {
    x: undefined,
    y: undefined
}

function randomNumberBetween(min, max, integer = true) {
    let num = Math.random() * (max - min + 1) + min;
    return integer ? Math.floor(num) : num;
}

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = randomNumberBetween(.1, 3, false);
        this.color = `hsl(${hue}, 100%, 50%)`;

        this.dx = randomNumberBetween(-2, 2);
        this.dy = randomNumberBetween(-2, 2);
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    animate() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.radius > 0.1) {
            this.radius -= 0.05;
        }

        this.draw();
    }
}

class Art {
    constructor() {
        this.particles = [];

        canvas.addEventListener('mousemove', event => {
            mouse.x = event.x;
            mouse.y = event.y;

            for (let i = 0; i < 3; i++) {
                this.particles.push(new Particle());
            }
        });

        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });
    }

    handleParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].animate();

            for (let j = i; j < this.particles.length; j++) {
                let dx = this.particles[i].x - this.particles[j].x;
                let dy = this.particles[i].y - this.particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 90) {
                    ctx.beginPath();
                    ctx.strokeStyle = this.particles[i].color;
                    ctx.lineWidth = this.particles[i].radius / 10;
                    ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    ctx.stroke();
                }
            }

            if (this.particles[i].radius <= 0.3) {
                this.particles.splice(i, 1);
                i--;
            }
        }
    }

    update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.handleParticles();

        hue++;

        requestAnimationFrame(this.update.bind(this));
    }
}

const art = new Art();
art.update();