const vortex = document.getElementById('vortex');
const ctx = vortex.getContext('2d');


//gradient
ctx.font = "2rem Verdana";
ctx.fontWeight = "400";
var gradient = ctx.createLinearGradient(0, 0, vortex.width, 0);
gradient.addColorStop("0"," #fff");
ctx.fillStyle = gradient;
ctx.fillText('ZERO TO MASTERY NUMBER ONE', 40, 40);



function drawStar(cx,cy,spikes,outerRadius,innerRadius){
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      ctx.lineTo(x,y)
      rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=5;
    ctx.strokeStyle='#FFD209';
    ctx.stroke();
    ctx.fillStyle='yellow';
    ctx.fill();

    textContent();
  }

function textContent() {
    
ctx.font = "7rem Verdana";
ctx.fontWeight = "400";
var gradient = ctx.createLinearGradient(0, 0, vortex.width, 0);
gradient.addColorStop("0"," #fff");
ctx.fillStyle = gradient;
ctx.fillText('1', 260, 240);
}
  
drawStar(295, 200, 20, 90, 95);
  




