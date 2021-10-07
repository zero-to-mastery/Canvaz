// var canvas = document.getElementById('canvas')
// var w = canvas.width = window.innerWidth
// var h = canvas.height = window.innerHeight
// var c = canvas.getContext("2d")

// var particlesOnScreen = 245
// var particlesArray = []


// function random(min, max) {
//     return min + Math.random() * (max - min + 1);
// }

// function clientResize(ev) {
//     w = canvas.width = window.innerWidth;
//     h = canvas.height = window.innerHeight;
// }

// window.addEventListener("resize", clientResize)


// function createSnowFlakes() {
//     for (var i = 0; i < particlesOnScreen; i++) {
//         particlesArray.push({
//             x: Math.random() * w,
//             y: Math.random() * h,
//             opacity: Math.random(),
//             dx: random(-11, 11),
//             dy: random(7, 5),
//             radius: random(0.5,4.2)
//         })
//     }
// }


// function drawSnowFlakes() {
//     for(var i = 0; i < particlesArray.length ; i++){
//         var gradient = c.createRadialGradient(
//             particlesArray[i].x,
//             particlesArray[i].y,
//             0,
//             particlesArray[i].x,
//             particlesArray[i].y,
//             particlesArray[i].radius
//         );

//         gradient.addColorStop(0, "rgba(255, 255, 255 " + particlesArray[i].opacity + ")"); //white 
//         gradient.addColorStop(0.8, "rgba(210, 236, 242, " + particlesArray[i].opacity + ")"); //blue 
//         gradient.addColorStop(1, "rgba(237, 247, 249" + particlesArray[i].opacity + ")"); //light bluish 


//         c.beginPath();
//         c.arc(
//             particlesArray[i].x,
//             particlesArray[i].y,
//             particlesArray[i].radius,
//             0,
//             Math.PI*2,
//             false,
//         )
//         c.fillStyle = gradient;
//         c.fill()
//     }
// }

// function moveSnowFlakes(){
//     for(var i = 0 ; i < particlesArray.length ; i++){
//         particlesArray[i].x += particlesArray[i].dx;
//         particlesArray[i].y += particlesArray[i].dy;

//         if(particlesArray[i].y > h) {
//             particlesArray[i].x = Math.random() * w * 1.5;
//             particlesArray[i].y = -50
//         }
//     }
// }

// function updateSnowFall(){
//     c.clearRect(0,0,w,h);
//     drawSnowFlakes();
//     moveSnowFlakes()
// }

// setInterval(updateSnowFall, 50);
// createSnowFlakes()


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particlesOnScreen = 245;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
    return (min + Math.random() * (max - min + 1));
};

function clientResize(ev){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};
window.addEventListener("resize", clientResize);

function createSnowFlakes() {
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: Math.random() * w,  
            y: Math.random() * h,  
            opacity: Math.random(),  
            speedX: random(-11, 11),  
            speedY: random(7, 15),    
            radius:random(0.5, 4.2),
        })
    }
};

function drawSnowFlakes(){
    for(var i = 0; i < particlesArray.length; i++){    
        var gradient = ctx.createRadialGradient(  
            particlesArray[i].x,   
            particlesArray[i].y,   
            0,                     
            particlesArray[i].x,   
            particlesArray[i].y,   
            particlesArray[i].radius  
            );

            gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")");  // white
            gradient.addColorStop(.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")");  // bluish
            gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");   // lighter bluish
    
            ctx.beginPath(); 
            ctx.arc(
            particlesArray[i].x,  
            particlesArray[i].y,  
            particlesArray[i].radius,  
            0,                         
            Math.PI*2,                 
            false                     
            );

        ctx.fillStyle = gradient;   
        ctx.stroke(); 
        console.log(ctx.fill())                
    }
};

function moveSnowFlakes(){
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {                                                                               
            particlesArray[i].x = Math.random() * w * 1.5;
            particlesArray[i].y = -50;
        }
    }
};

function updateSnowFall  () {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();

};

setInterval(updateSnowFall,50);
createSnowFlakes();