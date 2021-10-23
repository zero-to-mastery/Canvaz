let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');

// draw microsoft logo
ctx.fillStyle = '#F30';
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = '#6C0';
ctx.fillRect(80, 0, 75, 75);
ctx.fillStyle = '#09F';
ctx.fillRect(0, 80, 75, 75);
ctx.fillStyle = '#FD0';
ctx.fillRect(80, 80, 75, 75);
