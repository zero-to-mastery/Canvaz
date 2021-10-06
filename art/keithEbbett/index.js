const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

context.fillStyle = '#303030'
context.fillRect(0,0,200,200)
//canvas.style.opacity = '0.8'

var rg = context.createRadialGradient (80, 80, 10, 120, 120, 90);
rg.addColorStop (0, 'yellow');
rg.addColorStop (1, 'red');
context.fillStyle = rg;
context.beginPath();
context.arc (120,80,65,0,2*Math.PI,false);
context.fill();
context.closePath();

context.scale (1.1, 1.2);
context.fillStyle = 'brown';      
context.beginPath();               
context.arc (25,190,75,2,2*Math.PI);  
context.fill() 

context.globalCompositeOperation = "source-over"

context.scale (1.5, 0.6);
context.fillStyle = 'cyan';       
context.lineWidth = 3.0;              
context.beginPath();               
context.arc (5,7,40,0,2*Math.PI);  
context.fill() 

 
context.strokeStyle = 'orange';       
context.lineWidth = 7.0;              
context.beginPath();               
context.arc (140,240,60,0,2*Math.PI);  
context.stroke(); 
   

context.scale (1.2, 1.1);
context.strokeStyle = 'blue';       
context.lineWidth = 3.0;              
context.beginPath();               
context.arc (25,50,60,0,2*Math.PI);  
context.stroke(); 


context.scale (1.8, 0.5);
context.strokeStyle = 'green';       
context.lineWidth = 9.0;              
context.beginPath();               
context.arc (85,260,90,0,2*Math.PI);  
context.stroke(); 
 


