canvas=document.getElementById("my-canvas");
ctx=canvas.getContext("2d");

var ringData = [
    {
        color: '#000000',
        coordinates: [180, 150]
    },
    {
        color: '#3E065F',
        coordinates: [180, 200]
    },
    {
        color: '#700B97',
        coordinates: [180, 250]
    },
    {
        color: '#8E05C2',
        coordinates: [180, 300]
    },
    {
        color: '#9D84B7',
        coordinates: [180, 350]
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
