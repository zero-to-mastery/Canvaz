const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

function draw() {
    canvas.width = 600
    canvas.height = 600
    ctx.fillStyle = '#42b883';
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(300, 500);
    ctx.lineTo(600, 0);
    ctx.fill()

    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = '#35495e';

    ctx.moveTo(120, 0);
    ctx.lineTo(300, 300);
    ctx.lineTo(450, 0);
    ctx.fill()

    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = '#ffffff';

    ctx.moveTo(230, 0);
    ctx.lineTo(300, 120);
    ctx.lineTo(360, 0);
    ctx.fill()

    ctx.fillStyle = '#35495e';

    
    ctx.font = '48px Arial';
    ctx.fillText('Vue.js', 230, 550)
}
draw()