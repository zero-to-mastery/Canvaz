const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake; 
var fruit;

class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];

        this.draw = function () {
            ctx.fillStyle = "#FFFFFF";

            for (let i=0; i<this.tail.length; i++){
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }
            ctx.fillRect(this.x, this.y, scale, scale);
        };

        this.update = function() {
            for (let i=0; i<this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i+1];
            }

            this.tail[this.total -1] = {x: this.x, y: this.y};
            this.x += this.xSpeed;
            this.y += this.ySpeed;

            this.x > canvas.width && (this.x = 0);
            this.y > canvas.width && (this.y = 0);
            this.x < 0 && (this.x = canvas.width);
            this.y < 0 && (this.y = canvas.height);
            
        }

        this.changeDirection = function(direction) {
            switch(direction) {
                case 'Up':
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                    break;
                case 'Down':
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                    break;
                case 'Left':
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                    break;
                case 'Right':
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    break;
            }
        }

        this.eat = function(fruit) {
            if (this.x === fruit.x && this.y === fruit.y) {
                this.total++;
                return true;
            }
            return false;
        }
    }
}

class Fruit {
    constructor() {
        this.x;
        this.y;

        this.pickLocation = function() {
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        };
        this.draw = function() {
            ctx.fillStyle = "#fa3232";
            ctx.fillRect(this.x, this.y, scale, scale);
        };
    }
}

(function setup() {
    snake = new Snake();
    snake.draw();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 250);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction)
}))