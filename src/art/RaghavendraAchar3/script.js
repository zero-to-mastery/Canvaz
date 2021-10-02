const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');

window.addEventListener('load',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    let width=0.5*(window.innerWidth - 9);
    let height=0.5*(window.innerHeight - 11);

    ctx.lineWidth=30;
    ctx.strokeStyle='#8F0008';
    ctx.beginPath();
    ctx.arc(width,height,100,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(width,height,160,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle='#C9CBCD';
    ctx.beginPath();
    ctx.arc(width,height,130,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle='#00336B';
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.arc(width,height,90,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle='#C9CBCD';
    ctx.save();
    ctx.beginPath();
    ctx.translate(width, height);
    ctx.moveTo(0,0-90);
    for (var i = 0; i < 5; i++) {
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, 0 - (90*0.4));
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, 0 - 90);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    
})


window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    let width=0.5*(window.innerWidth - 9);
    let height=0.5*(window.innerHeight - 11);

    ctx.lineWidth=30;
    ctx.strokeStyle='#8F0008';
    ctx.beginPath();
    ctx.arc(width,height,100,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(width,height,160,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle='#C9CBCD';
    ctx.beginPath();
    ctx.arc(width,height,130,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle='#00336B';
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.arc(width,height,90,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle='#C9CBCD';
    ctx.save();
    ctx.beginPath();
    ctx.translate(width, height);
    ctx.moveTo(0,0-90);
    for (var i = 0; i < 5; i++) {
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, 0 - (90*0.4));
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, 0 - 90);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
})

