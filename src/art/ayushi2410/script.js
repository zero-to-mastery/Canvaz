canvas=document.getElementById("my-canvas");
ctx=canvas.getContext("2d");

var ringData = [
    {
        color: '#800020',
        coordinates: [180, 210]
    },
    {
        color: '#C21807',
        coordinates: [300, 210]
    },
    {
        color: '#FF2800',
        coordinates: [240, 210]
    },
    {
        color: '#E0115F',
        coordinates: [420, 210]
    },
    {
        color: '#FC7676',
        coordinates: [360, 210]
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
