window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");


    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth
   
    //Upper Area
    ctx.beginPath();
    ctx.moveTo(30, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(180, 40);
    ctx.lineTo(150, 30);
    ctx.lineTo(80, 30);
    ctx.lineTo(50, 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.shadowColor = "blue";
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    

    //Left Slanting Stroke
    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(180, 180);
    ctx.lineTo(40, 70);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.shadowColor = "blue";
    ctx.shadowBlur = 60;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Right Slanting Stroke
    ctx.beginPath();
    ctx.moveTo(170, 60);
    ctx.lineTo(70, 180);
    ctx.lineTo(180, 70);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.shadowColor = "blue";
    ctx.shadowBlur = 60;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Vertical Mid Area
    ctx.beginPath();
    ctx.moveTo(95, 30);
    ctx.lineTo(120, 320);
    ctx.lineTo(135, 30);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.shadowColor = "blue";
    ctx.shadowBlur = 40;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();


})

