const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');

window.addEventListener('load',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    const width=0.5*(window.innerWidth-90);
    const height=0.2*(window.innerHeight-105);
    ctx.fillStyle='#A19D2F';

    for(let i=1;i<20;i++){
        ctx.fillRect( width-i,height+i,200,300);
    }
    ctx.fillStyle='#F8E735';
    
    ctx.fillRect(width,height,200,300);
    ctx.fillStyle='black';
    ctx.fillRect( width,height+65,200,40);

    ctx.strokeStyle='#6A7687';
    ctx.lineWidth=15;
    for(let i=1;i<=3;i++){
        ctx.strokeRect( width+60-i,height+40+i,85,85);
    }

    ctx.fillStyle='#3d3836';
    for(let i=1;i<=2;i++){
        ctx.fillRect( width+40-i,height+61+i,20,48);
        ctx.fillRect( width+145-i,height+61+i,20,48);
    }
    ctx.fillStyle='#5b5958';
    ctx.fillRect( width+40,height+61,20,48);
    ctx.fillRect( width+145,height+61,20,48);
    ctx.lineWidth=15;
    ctx.strokeStyle='#D0C4BF';
    
    ctx.fillStyle='white';
    ctx.fillRect( width+67,height+58,68,56);
    ctx.strokeRect( width+60,height+40,85,85);
    
    ctx.fillStyle='brown';
    ctx.fillRect( width+90,height+80,20,20);

    ctx.beginPath()
    for(let i=0;i<40;i++){
        
        ctx.moveTo(width-19,height+95+i);
        ctx.lineTo(width,height+65+i);
        ctx.strokeStyle='black';
        ctx.lineWidth=1;
        ctx.stroke();
    }
    ctx.closePath()

    

    ctx.beginPath()
    for(let j=0;j<10;j++){
    for(let i=0;i<30;i++){
        ctx.moveTo(width-19-j,height+245+i);
        ctx.lineTo(width-j,height+205+i);
        ctx.strokeStyle='#004069';
        ctx.lineWidth=1;
        ctx.stroke();
        }
    }
    ctx.closePath()

    ctx.fillStyle='#0E6189';
    ctx.fillRect( width,height+205,55,30);
    ctx.fillRect( width+55,height+225,90,75);
    ctx.fillRect( width+145,height+205,55,30);


    ctx.beginPath()
    for(let j=0;j<10;j++){
        for(let i=0;i<100;i++){
            ctx.moveTo(width-19-j,height+340+i);
            ctx.lineTo(width-j,height+300+i);
            ctx.strokeStyle='#004069';
            ctx.lineWidth=1;
            ctx.stroke();
            }
        }
    ctx.closePath()    

    ctx.fillRect( width,height+300,200,100);

        for(let i=0;i<41;i++){
            ctx.moveTo(width-i/2,height+400+i);
            ctx.lineTo(width+200-i,height+400+i);
            ctx.strokeStyle='#004069';
            ctx.lineWidth=1;
            ctx.stroke();
            }

            ctx.beginPath()
            ctx.strokeStyle='#5a3f0e';
            ctx.fillStyle='#B5AEAE';
            ctx.moveTo(width+45,height+165)
            ctx.bezierCurveTo(width+85,height+185, width+125,height+185, width+165, height+165);
            ctx.bezierCurveTo(width+85, height+205, width+125, height+205, width+45, height+165);
            ctx.fill()
            ctx.stroke()
            ctx.closePath()  

            ctx.fillStyle='#004069';
            for(let i=1;i<20;i++){
                ctx.fillRect( width + 30 -i,height+440,40,70-i);
            }
            ctx.fillStyle='#0E6189';
            ctx.fillRect( width + 30,height+440,40,70);
            ctx.fillStyle='rgba(0,0,0,0.6)';
            for(let i=1;i<25;i++){
                ctx.fillRect( width + 35 - i,height+510-i,60,30);
            }

            
            ctx.fillStyle='black';
            ctx.fillRect( width + 115,height+510,60,30);
            
            ctx.fillStyle='#004069';
            for(let i=1;i<20;i++){
                ctx.fillRect( width + 110 -i,height+440,40,70-i);
            }
            ctx.fillStyle='#0E6189';
            ctx.fillRect( width + 110,height+440,40,70);
            ctx.fillStyle='rgba(0,0,0,0.6)';
            for(let i=1;i<25;i++){
                ctx.fillRect( width + 115 - i,height+510-i,60,30);
            }

            ctx.fillStyle='black';
            ctx.fillRect( width + 115,height+510,60,30);

            /*hands*/


            ctx.fillStyle='#A19D2F';
            for(let i=1;i<10;i++){
                ctx.fillRect( width -45 -i,height+270,40,120);
            }
            ctx.fillStyle='#F8E735';
            ctx.fillRect( width - 45,height+270,40,120);

            ctx.fillStyle='rgba(0,0,0,0.6)';
            for(let i=1;i<10;i++){
                ctx.fillRect( width - 45 -i, height + 390,40,30);
            }
            ctx.fillStyle='black';
            ctx.fillRect( width -45,height+390,40,30);

                        ctx.fillStyle='#A19D2F';
            for(let i=1;i<10;i++){
                ctx.fillRect( width + 200 + i,height+270,40,120);
            }
            ctx.fillStyle='#F8E735';
            ctx.fillRect( width + 200,height+270,40,120);

            ctx.fillStyle='rgba(0,0,0,0.6)';
            for(let i=1;i<10;i++){
                ctx.fillRect( width +200 + i, height + 390,40,30);
            }
            ctx.fillStyle='black';
            ctx.fillRect( width + 200 ,height+390,40,30);

})


window.addEventListener('resize',()=>{

    
})

