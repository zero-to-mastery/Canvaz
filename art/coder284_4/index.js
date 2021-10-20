var canvas=document.querySelector("canvas");
var c=canvas.getContext("2d");
c.lineWidth=5;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
for(var i=1;i<=100;i++){
    c.beginPath();
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    c.arc(x,y,30,0,Math.PI*2,false);
    

    var color="#";
    var values="0123456789abcdef";
    for (var w=0;w<6;w++) {
        var randomIndex= Math.floor((Math.random()*100)%16);
        color+=values[randomIndex];
    }
    c.strokeStyle=color;
    c.stroke();
}