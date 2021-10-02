const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function randNum(start,end){
    return Math.floor(Math.random()*(end-start))+start;
}

// ground
context.fillStyle = "#0c961c";
context.fillRect(0, 300, 600, 100);

//constant colors
let color_r = 240
let color_b = 28

for (let i=10; i<=600; i+=randNum(20,100)){
    let color = `rgb(${color_r}, ${randNum(1,255)}, ${color_b})`;

    let x = i
    let y = randNum(100,250)

//stalk
    context.fillStyle = "#0c961c";
    context.fillRect(x-2, y, 4, 400-y);

//flower petals
    context.beginPath();
    context.arc(x-20, y-5, 20, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();

//flower petals
    context.beginPath();
    context.arc(x, y-20, 20, 0, Math.PI * 2, true);
    context.fill();

//flower petals
    context.beginPath();
    context.arc(x+20, y-5, 20, 0, Math.PI * 2, true);
    context.fill();

//flower petals
    context.beginPath();
    context.arc(x+12, y+15, 20, 0, Math.PI * 2, true);
    context.fill();


//flower petals
    context.beginPath();
    context.arc(x-12, y+15, 20, 0, Math.PI * 2, true);
    context.fill();

//flower center
    context.beginPath();
    context.arc(x, y, 12, 0, Math.PI * 2, true);
    context.fillStyle = '#f1ee8e';
    context.fill();
}
