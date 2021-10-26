let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');

let j = 0
ctx.lineWidth = 8;
for (var i = 0; i < 4; i++) {
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(100 + j, 100, 50, 0, Math.PI * 2, true);
    j += 70;
    ctx.stroke();
}
