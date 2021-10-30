const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const edge = 80;

const mouse = {
    x:null,
    y:null
}

window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse.x);
})

class Root {
    constructor(x,y,color,centerX,centerY) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speedX = 0;
        this.speedY = 0;
        this.centerX = centerX;
        this.centerY = centerY;
    }
    draw() {
        this.speedX += (Math.random() - 0.5) / 2;
        this.speedY += (Math.random() - 0.5) / 2;
        this.x += this.speedX;
        this.y += this.speedY;

        const distanceX = this.x - this.centerX;
        const distanceY = this.y - this.centerY;
        const distance = (distanceX * distanceX + distanceY * distanceY);
        const radius = (-distance / edge + 1) * edge / 10;

        if (radius > 0) {
            requestAnimationFrame(this.draw.bind(this));
            ctx.beginPath();
            ctx.arc(this.x,this.y,radius,0,2*Math.PI);
            ctx.fillstyle = this.color;
            ctx.fill();
            ctx.strokeStyle = 'gold';
            ctx.stroke();
        }
    }
}

function branchOut() {
    const centerX = mouse.x;
    const centerY =  mouse.y;
    for (let i=0;i<30;i++) {
        const root = new Root(mouse.x,mouse.y,'pink',centerX,centerY)
        root.draw();
    }
}

window.addEventListener('resize',function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

window.addEventListener('mousemove',function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    branchOut();
});
