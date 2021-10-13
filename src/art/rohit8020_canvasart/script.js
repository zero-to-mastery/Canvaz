var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var height=0
var width=0

const animateFunc= (pos)=>{
    const interval=setInterval(()=>{
        if(Math.abs(height) > 510 || Math.abs(width) > 510){
            height=0
            width=0
            clearInterval(interval)
            switch (pos) {
                case "TL":animateFunc("TR")
                    break;
                case "TR":animateFunc("BR")
                    break;
                case "BR":animateFunc("BL")
                    break;
                case "BL":animateFunc("TL")
                    break;
                default:
                    break;
            }
        }
        if(pos==="TL"){
            height+=10
            width+=10
            ctx.fillRect(0,0,width,height);
        }else if(pos==="TR"){
            height+=10
            width-=10
            ctx.fillRect(500,0,width,height);
        }else if(pos==="BR"){
            height-=10
            width-=10
            ctx.fillRect(500,500,width,height);
        }else if(pos==="BL"){
            width+=10
            height-=10
            ctx.fillRect(0,500,width,height);
        }
        ctx.fillStyle = (
            `rgb(${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)})`);
    },80)
}

window.addEventListener('load', function () {
    animateFunc("TL")
});