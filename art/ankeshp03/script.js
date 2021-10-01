window.addEventListener("load", init);

let circles = [];

const circleOptions = {
    count: 10,
    radiusScale: 1.7,
    gap: 20,
    maxRadius: 8,
    colors: [
        "#3f51b5",
        "#1976d2",
        "#00acc1",
        "#388e3c",
        "#7cb342",
        "#c0ca33",
        "#ffeb3b",
        "#ffa000",
        "#ff5722",
        "#bf360c",
    ],
    animationDuration: 1500,
};

const framesPerSecond = 50;
const frameDuration = 1000 / framesPerSecond;

const container = {
    canvas: document.getElementById("pattern-container"),
    init: function () {
        this.canvas.width = this.canvas.height = 500;
        this.centerCanvasX = this.canvas.width / 2;
        this.centerCanvasY = this.canvas.height / 2;
        this.frameNo = 0;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(this.update, frameDuration);
    },
    update: function () {
        try {
            container.clear();
            for (let circle of circles) {
                if (circle.currentRadius <= circle.changeInRadiusPerFrame) {
                    circle.incrRadius = true;
                    circle.currentRadius = circle.changeInRadiusPerFrame;
                } else if (circle.currentRadius >= circle.radius) {
                    circle.incrRadius = false;
                }
                circle.currentRadius =
                    circle.currentRadius +
                    (circle.incrRadius
                        ? circle.changeInRadiusPerFrame
                        : -circle.changeInRadiusPerFrame);

                circle.update();
            }
        } catch (error) {
            console.error(error);
            container.stop();
        }
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    },
};

function init() {
    container.init();
    generatePattern({
        top: (i) => -(circleOptions.gap * i),
        left: (i) => -(circleOptions.gap * i),
    });
    generatePattern({
        top: (i) => -(circleOptions.gap * i),
        left: (i) => +(circleOptions.gap * i),
    });
    generatePattern({
        top: (i) => circleOptions.gap * i,
        left: (i) => -(circleOptions.gap * i),
    });
    generatePattern({
        top: (i) => circleOptions.gap * i,
        left: (i) => +(circleOptions.gap * i),
    });
    generatePattern({
        top: () => 0,
        left: (i) => -(circleOptions.gap * (i + 1)),
    });
    generatePattern({ top: () => 0, left: (i) => circleOptions.gap * (i + 1) });
    generatePattern({
        top: (i) => -(circleOptions.gap * (i + 1)),
        left: () => 0,
    });
    generatePattern({ top: (i) => circleOptions.gap * (i + 1), left: () => 0 });
}

function generatePattern({ top: defaultTop, left: defaultLeft }) {
    for (let i = 1; i <= circleOptions.count; i++) {
        const radius = Math.min(
                (circleOptions.maxRadius / i) * circleOptions.radiusScale,
                circleOptions.maxRadius
            ),
            top = (defaultTop && defaultTop(i)) ?? circleOptions.gap * (i - 1),
            left =
                (defaultLeft && defaultLeft(i)) ?? circleOptions.gap * (i - 1);
        const circle = new Circle(i - 1, radius, { top, left });
        circles.push(circle);
    }
}

class Circle {
    constructor(index, radius, position) {
        this.incrRadius = false;
        this.index = index;
        this.radius = radius;
        this.currentRadius = radius;
        this.position = position;
        this.changeInRadiusPerFrame =
            radius / (circleOptions.animationDuration / frameDuration);
        this.update = function () {
            const context = container.context;
            context.beginPath();
            context.arc(
                container.centerCanvasX + this.position.left,
                container.centerCanvasY + this.position.top,
                this.currentRadius,
                0,
                2 * Math.PI,
                false
            );
            context.fillStyle = circleOptions.colors[this.index];
            context.fill();
        };
    }
}
