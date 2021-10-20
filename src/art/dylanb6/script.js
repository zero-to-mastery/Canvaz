/*
    draw(); - called once the body finishes loading
*/
function draw() {
    var canvas = document.getElementById("art");

    // if browser supports canvas, draw art on canvas, else, log 
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // draw white keys
        for (let i = 0; i <= 300; i += 20){
            ctx.strokeRect(i, 200, 20, 100);
        }

        // draw black keys
        for (let i = 0; i <= 100; i += 100) {
            ctx.fillRect(36+i, 200, 10, 60);
            ctx.fillRect(54+i, 200, 10, 60);
    
            ctx.fillRect(76+i, 200, 10, 60);
            ctx.fillRect(95+i, 200, 10, 60);
            ctx.fillRect(114+i, 200, 10, 60);

            ctx.fillRect(236, 200, 10, 60);
            ctx.fillRect(254, 200, 10, 60);
        }        

        ctx.fillRect(0, 160, 300, 40); // draw console

        ctx.strokeRect(100, 50, 100, 150);  // draw paper

        // draw lines on paper
        for (let i = 0; i <= 90; i += 10) {
            ctx.beginPath();
            ctx.moveTo(105, 60+i);
            ctx.lineTo(195, 60+i);
            ctx.stroke();
        }
        
    } else {
        console.log("Canvas is not supported by your browser");
    }
}