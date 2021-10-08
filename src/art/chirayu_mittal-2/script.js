var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext('2d')

function Circle(x, y) {
    this.x = x
    this.y = y

    this.draw = function () {

    }
}

var x = Math.random() * innerWidth
var y = Math.random() * innerHeight
var dx = (Math.random() - 0.5) * 10
var dy = (Math.random() - 0.5) * 10
var radius = 30
function random_bg_color() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + a + "," + b + "," + c + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}



function animate() {


    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI, false);
    c.strokeStyle = 'blue'
    c.stroke()

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
        random_bg_color();
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy
        random_bg_color();
    }

    y += dy
    x += dx
}

animate()
