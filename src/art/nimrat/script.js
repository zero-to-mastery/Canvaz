var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

var offset = 0;
var offset1 = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(0, 0, 250, 150);
    ctx.strokeText('Geeky-Star', 10, 50);
    ctx.font = "48px serif";
    ctx.textBaseline = "hanging";


}

function march() {
    offset++;
    if (offset > 16) {
        offset = 0;
    }
    draw();

    setTimeout(march, 20);
}

march();


ctx.drawImage(document.getElementById('source'), 33, 71, 104, 124, 21, 20, 87, 104);

canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

function draw1() {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.setLineDash([4, 2]);
    ctx2.lineDashOffset = -offset1;
    ctx2.strokeRect(0, 0, 300, 150);
    ctx2.strokeText('Nimrat-Kaur', 20, 50);
    ctx2.font = "48px serif";
    ctx2.textBaseline = "hanging";
}

function march1() {
    offset1++;
    if (offset1 > 16) {
        offset1 = 0;
    }
    draw1();

    setTimeout(march1, 20);
}

march1();
