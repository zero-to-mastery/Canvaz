const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// moon
context.beginPath();
context.arc(400, 100, 50, 0, Math.PI * 2, true);
context.fillStyle = '#f6edd7';
context.fill();

function moonArc(){
    return Math.floor(Math.random() * 20)+35;
}

// moon arc
context.beginPath();
context.arc(375, 75, moonArc(), 0, Math.PI * 2, true);
context.fillStyle = '#16273d';
context.fill();

//functions for Snow X position
function randSnowX(){
    return Math.floor(Math.random() * 600);
}

//functions for Snow Y position
function randSnowY(){
    return Math.floor(Math.random() * 300);
}

// stars
context.beginPath();
context.arc(randSnowX(), randSnowY(), 2, 0, Math.PI * 2, true);
context.fillStyle = 'white';
context.fill();
for (let i=0; i<100; i++){
    context.beginPath();
    context.arc(randSnowX(), randSnowY(), 2, 0, Math.PI * 2, true);
    context.fill();
}

// ground
context.fillStyle = "#fff";
context.fillRect(0, 300, 600, 100);

// snowman body
context.beginPath();
context.arc(500, 300, 40, 0, Math.PI * 2, true);
context.fillStyle = '#eee';
context.fill();
context.beginPath();
context.arc(500, 250, 30, 0, Math.PI * 2, true);
context.fill();
context.beginPath();
context.arc(500, 210, 20, 0, Math.PI * 2, true);
context.fill();

// snowman eyes
context.beginPath();
context.arc(490, 200, 2, 0, Math.PI * 2, true);
context.fillStyle = '#000';
context.fill();
context.beginPath();
context.arc(500, 200, 2, 0, Math.PI * 2, true);
context.fill();

// Left Inner Ear
context.beginPath();
context.moveTo(491, 210);
context.lineTo(470, 205);
context.lineTo(491, 205);
context.fillStyle = '#ef930a';
context.fill()


var img = new Image();   // Create new img element
img.src = './cabin.png';
const ctx = context
img.onload = function() {
    ctx.drawImage(img, 50, 90, 250, 250);

  };
