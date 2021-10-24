window.addEventListener('load', () => {
    const canvas = document.getElementById('canfuse');
    const ctx = canvas.getContext("2d");
    const clearBtn = document.getElementById('clear');

    canvas.height = window.innerHeight*0.9;
    canvas.width = window.innerWidth*0.9;

    let draw = false;

    function drawStart(e){
        draw = true;
        drawing(e);
    };

    function drawFinish(){
        draw = false;
        ctx.beginPath();
    };

    function drawing(e) {
        if(!draw) {
            return;
        }

        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    };

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    canvas.addEventListener('mousedown', drawStart);
    canvas.addEventListener('mouseup', drawFinish);
    canvas.addEventListener('mousemove', drawing);
    clearBtn.addEventListener('click', clearCanvas);
});
