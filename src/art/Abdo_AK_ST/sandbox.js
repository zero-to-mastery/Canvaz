const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
canvas.width = 200;
canvas.height = 200;

ctx.fillStyle = '#000';

// Draw the 6 arcs.
for(let s = 99; s > 90; s--){
    drawNArcs(100, 100, s);
}

// Draw the face circle.
for(let s = 80; s > 70; s--){
    ctx.beginPath();
    ctx.arc(100, 100, s, 0, 2 * Math.PI);
    ctx.stroke();
}

//Draw the stroke line.
for(let s = -5; s < 5; s++){
    ctx.beginPath();
    ctx.moveTo(20, 100 + s);
    ctx.lineTo(180, 100 + s);
    ctx.stroke();
}


// Draw the teeth.
for(let i = 0; i < 2; i++){
    for(let s = 0; s < 15; s++){
        ctx.beginPath();
        ctx.moveTo( i*30 + 44 + s, 100);
        const endP = Math.sqrt(70 * 70 + Math.pow(35 + s, 2));
        console.log(endP);
        ctx.lineTo( i*30 + 44 + s, 145 + s + i * 20);
        ctx.stroke();
    }
}
for(let s = 0; s < 15; s++){
        ctx.beginPath();
        ctx.moveTo( 70 + 40 + s, 100 );
        const endP = Math.sqrt(70 * 70 + Math.pow(35 + s, 2));
        console.log(endP);
        ctx.lineTo( 70 + 40 + s, 180 -s );
        ctx.stroke();
}
for(let s = 0; s < 15; s++){
    ctx.beginPath();
    ctx.moveTo( 140 + s, 100 );
    const endP = Math.sqrt(70 * 70 + Math.pow(35 + s, 2));
    console.log(endP);
    ctx.lineTo( 140 + s, 160 -s );
    ctx.stroke();
}

// Draw the eyes.
//left eye.
for(let s = 15; s > 0; s--){
    ctx.beginPath();
    ctx.arc(65, 70, s, 0, 2 * Math.PI);
    ctx.stroke();
}
//right eye.
for(let s = 15; s > 0; s--){
    ctx.beginPath();
    ctx.arc(135, 70, s, 0, 2 * Math.PI);
    ctx.stroke();
}

// Draw the nose.
//left eye.
for(let s = 5; s > 0; s--){
    ctx.beginPath();
    ctx.arc(100, 80, s, 0, 2 * Math.PI);
    ctx.stroke();
}




function drawNArcs(x, y, radius, angle = 6){
    console.log('function running');
    for(let i = 0; i < 2 * angle; i+=2){
        const sAngle = i*Math.PI/angle + Math.PI/(2*angle);
        const eAngle = sAngle + Math.PI / angle;
        ctx.beginPath();
        ctx.arc(x, y, radius, sAngle, eAngle);
        ctx.stroke();
    }
}