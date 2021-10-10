const canvas =  document.getElementById('canvasOne');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext('2d');
const particalesArray=[];
const mouse={
  x:undefined,
  y:undefined
}

canvas.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;

 for(let i=0 ; i< 2 ; i++){
  particalesArray.push(new Particle())
}
})

class Particle{
  constructor(){
    this.x=mouse.x;
    this.y=mouse.y;

    this.size=Math.random() * 15 + 1;
    this.speedX=Math.random() * 3 - 1.5;
    this.speedY=Math.random() * 3 - 1.5;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2) this.size -=0.1;
  }
  draw(){
    ctx.fillStyle='white';
    ctx.lineWith=5;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();

  }
}

function handleParticles(){
  for( let i = 0 ; i < particalesArray.length ; i++ ){
    particalesArray[i].update();
    particalesArray[i].draw();
    if(particalesArray[i].size<=0.3){
      particalesArray.splice(i,1);
      i--;
    }
  }
}

function animate(){
  ctx.fillStyle='rgba(0,0,0,0.1)';
  ctx.fillRect(0,0,canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate()


