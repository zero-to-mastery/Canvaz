/*
    draw(); - called once the body finishes loading
*/
function draw() {
    var canvas = document.getElementById("art");

    // if browser supports canvas, draw art on canvas, else, log 
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (let i = 0; i <= 300; i += 20){
            ctx.strokeRect(i, 200, 20, 100);
        }

        for (let i = 0; i <= 100; i += 100) {
            ctx.fillRect(36+i, 200, 10, 60);
            ctx.fillRect(54+i, 200, 10, 60);
    
            ctx.fillRect(76+i, 200, 10, 60);
            ctx.fillRect(95+i, 200, 10, 60);
            ctx.fillRect(114+i, 200, 10, 60);
        }


        
    } else {
        console.log("Canvas is not supported by your browser");
    }
}