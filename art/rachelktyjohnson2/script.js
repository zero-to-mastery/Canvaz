const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//functions for Snow X position
function randStarsX(){
    return Math.floor(Math.random() * 600);
}

//functions for Snow Y position
function randStarsY(){
    return Math.floor(Math.random() * 400);
}

// stars
context.beginPath();
context.arc(randStarsX(), randStarsY(), 2, 0, Math.PI * 2, true);
context.fillStyle = '#ffdba6';
context.fill();
for (let i=0; i<100; i++){
    context.beginPath();
    context.arc(randStarsX(), randStarsY(), 2, 0, Math.PI * 2, true);
    context.fill();
}

var img = new Image();   // Create new img element
img.src = './moon.png';
const ctx = context
img.onload = function() {
    ctx.drawImage(img, 225, 125, 150, 150);

  };
