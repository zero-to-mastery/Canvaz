const canvas = document.getElementById('art');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const ctx = canvas.getContext('2d');

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        let dx = randomNumberBetween(1, 5);
        let dy = randomNumberBetween(1, 5);
        this.dx = Math.random() < .5 ? dx : dx * -1;
        this.dy = Math.random() < .5 ? dy : dy * -1;
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

        if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
            this.dx *= -1;
        }

        if ((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0) {
            this.dy *= -1;
        }

        this.draw();
    }
}

class Art {
    constructor(numBalls) {
        this.balls = [];

        for (let i = 0; i < numBalls; i++) {
            let radius = randomNumberBetween(15, 40);
            let x = Math.random() * (canvas.width - radius * 2) + radius;
            let y = Math.random() * (canvas.height - radius * 2) + radius;
            let color = Math.random() < .5 ? 'red' : 'blue';
        
            this.balls.push(new Circle(x, y, radius, color));
        }

        canvas.addEventListener('click', e => {
            let radius = randomNumberBetween(15, 40);
            let color = Math.random() < .5 ? 'green' : 'orange';

            this.balls.push(new Circle(e.clientX, e.clientY, radius, color));
        });
    }

    update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].animate();
        }

        requestAnimationFrame(this.update.bind(this));
    }
}

const art = new Art(20);
art.update();