const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawTree(startX, startY, len, angle, branchWidth, color){
  ctx.beginPath(); 
  ctx.save() 
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0,0,);
  ctx.lineTo(0, -len) 
  ctx. stroke() 
  
  if(len < 5){
    ctx.restore();
    return;
  }
  
  
  drawTree(0, -len, len * 0.75, angle + 5, branchWidth);
  drawTree(0, -len, len * 0.75, angle - 5, branchWidth); 
  
  ctx.restore();
  }
  
  drawTree(canvas.width/4, canvas.height - 10, 100, 0, 2, 'darkgreen');
  drawTree(canvas.width/2, canvas.height - 10, 50, 0, -20, 'white');
  drawTree(canvas.width/1.3, canvas.height - 10, 120, 0, -20, 'green');