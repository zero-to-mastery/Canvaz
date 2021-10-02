const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');

window.addEventListener('load',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    const width=0.5*(window.innerWidth-90);
    const height=0.5*(window.innerHeight-105);
    ctx.fillStyle='black';
    ctx.fillRect(width-250,height-50,500,100);
    ctx.fillStyle='#DD0000';
    ctx.fillRect(width-250,height+50,500,100);
    ctx.fillStyle='#FFCE00';
    ctx.fillRect(width-250,height+150,500,100);

    ctx.lineWidth=10;
    ctx.strokeStyle='grey';
    ctx.strokeRect(width-250,height-50,500,300);
})


window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    const width=0.5*(window.innerWidth-90);
    const height=0.5*(window.innerHeight-105);
    ctx.fillStyle='black';
    ctx.fillRect(width-250,height-50,500,100);
    ctx.fillStyle='#DD0000';
    ctx.fillRect(width-250,height+50,500,100);
    ctx.fillStyle='#FFCE00';
    ctx.fillRect(width-250,height+150,500,100);

    ctx.lineWidth=10;
    ctx.strokeStyle='grey';
    ctx.strokeRect(width-250,height-50,500,300);
    
})

