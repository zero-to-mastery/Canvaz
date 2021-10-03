canvas=document.getElementById("my-canvas");
ctx=canvas.getContext("2d");

var ringData = [
    {
        color: 'blue',
        coordinates: [180, 210]
    },
    {
        color: 'black',
        coordinates: [300, 210]
    },
    {
        color: 'red',
        coordinates: [420, 210]
    },
    {
        color: 'gold',
        coordinates: [240, 270]
    },
    {
        color: 'green',
        coordinates: [360, 270]
    },
]

function draw(){
    for(let ring of ringData){
        ctx.beginPath();
        ctx.strokeStyle=ring.color;
        ctx.lineWidth=8;
        ctx.arc(ring.coordinates[0], ring.coordinates[1], 50, 0, 2*Math.PI);
        ctx.stroke();
    }
}

draw()
