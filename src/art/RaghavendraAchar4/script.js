const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');

window.addEventListener('load',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    let width=0.5*(window.innerWidth - 9);
    let height=0.5*(window.innerHeight - 11);

    var my_gradient = ctx.createLinearGradient(0, 0, 0,10);
    my_gradient.addColorStop(0, "#d2ccc4");
    my_gradient.addColorStop(1, "#2f4353");

    ctx.fillStyle=my_gradient;
    ctx.beginPath();
    ctx.arc(width,height,350,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();    

    
    ctx.lineWidth=30;
    ctx.strokeStyle='white';
    ctx.lineWidth=12;
    ctx.beginPath();
    ctx.arc(width,height+50,150,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();  


    ctx.beginPath()
    ctx.moveTo(width,height+350);
    ctx.lineTo(width,height-350);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath()
    ctx.moveTo(width+270,height+200);
    ctx.lineTo(width-270,height+200);
    ctx.lineTo(width,height-265);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width,height,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height - 80 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height - 80 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height + 80 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height + 80 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height - 190 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height - 190 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height + 170 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height + 170 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();
 
    ctx.beginPath();
    ctx.arc(width,height + 270 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height + 270 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height - 300 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height - 300 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();



})



window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth - 9;
    canvas.height=window.innerHeight - 11;

    let width=0.5*(window.innerWidth - 9);
    let height=0.5*(window.innerHeight - 11);

    var my_gradient = ctx.createLinearGradient(0, 0, 0,10);
    my_gradient.addColorStop(0, "#d2ccc4");
    my_gradient.addColorStop(1, "#2f4353");

    ctx.fillStyle=my_gradient;
    ctx.beginPath();
    ctx.arc(width,height,350,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();    

    
    ctx.lineWidth=30;
    ctx.strokeStyle='white';
    ctx.lineWidth=12;
    ctx.beginPath();
    ctx.arc(width,height+50,150,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();  


    ctx.beginPath()
    ctx.moveTo(width,height+350);
    ctx.lineTo(width,height-350);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath()
    ctx.moveTo(width+270,height+200);
    ctx.lineTo(width-270,height+200);
    ctx.lineTo(width,height-265);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width,height,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height - 80 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height - 80 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height + 80 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height + 80 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height - 190 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height - 190 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height + 170 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height + 170 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();
 
    ctx.beginPath();
    ctx.arc(width,height + 270 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height + 270 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width,height - 300 ,5,3/2*Math.PI,Math.PI/2);
    ctx.arc(width,height - 300 ,5,Math.PI/2,3/2*Math.PI);
    ctx.stroke();
    ctx.closePath();

})

