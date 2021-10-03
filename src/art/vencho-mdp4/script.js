const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.font = "bold 48px sans-serif";
ctx.fillText("JS", 15, 175);

ctx.globalCompositeOperation = 'destination-over';
const bg = new Path2D();

bg.rect(0, 0, 600, 400);

ctx.fillStyle = "yellow";
ctx.fill(bg);

