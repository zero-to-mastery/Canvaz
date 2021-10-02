var c = document.getElementById("canvasElem"),
ctx = c.getContext('2d');

const phi = 1.618033;

var h = window.innerHeight,
w = h * phi;

c.width = w;
c.height = h;

ctx.lineWidth = 5;

for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(h, h, h, -Math.PI, -Math.PI/2);
    ctx.strokeStyle = "#444";
    ctx.stroke();
    ctx.translate(w, 0);
    ctx.rotate(Math.PI / 2);
    h = w - h;
    w = h * phi;
}

document.body.appendChild(c);