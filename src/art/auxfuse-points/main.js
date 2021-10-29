const c = document.querySelector('canvas');
const ctx = c.getContext('2d');

c.height = window.innerHeight;
c.width = window.innerWidth;

function sides(r, inset, n){
    ctx.beginPath();
    ctx.save();
    ctx.translate(c.width/2, c.height/2);
    ctx.moveTo(0, 0 - r);

    for (let i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (r * inset));

        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - r);
    };

    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
};

sides(100, 0.5, 6);
