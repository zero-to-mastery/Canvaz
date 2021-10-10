const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')
centerX = canvas.offsetWidth * 0.5;
centerY = canvas.offsetHeight * 0.5;

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

x=(canvas.width %2) - 100
y=(canvas.height %2) - 150

c.fillStyle = "#FF9933"; 
c.fillRect(centerX,centerY,900,200); 

c.fillStyle = "#FFFFFF"; 
c.fillRect(centerX,centerY+200,900,200);  

c.fillStyle = "#138808"; 
c.fillRect(centerX,centerY+400,900,200);  
console.log(canvas)

c.strokeStyle = "#000080";
c.lineWidth = 5;
c.arc(centerX+450, centerY+300, 100, 0,Math.PI * 2,false)
c.stroke()


c.lineWidth = 3;
for(var i=0;i<24;i++){
  c.beginPath()
  c.moveTo(centerX+450,centerY+300);
  finalAngle= 15 * i ;
  finalX =centerX+450+ Math.cos(Math.PI * finalAngle / 180) * 100;
  finalY = centerY+300 + Math.sin(Math.PI * finalAngle / 180) * 100;
  c.lineTo(finalX,finalY);
  c.stroke();
}




