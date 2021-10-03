var canvas = document.getElementById("my-canvas");
c = canvas.getContext('2d');
var isTvOn = false;

c.fillStyle = '#333';
c.fillRect(0, 0, canvas.width, canvas.height);

var btn = document.getElementById('switch');
btn.addEventListener('click', function(){
    if(isTvOn){
        isTvOn = !isTvOn;
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = '#333';
        c.fillRect(0, 0, canvas.width, canvas.height);
        btn.textContent = 'ON'
    }else{
        isTvOn = !isTvOn;
        loop();
        btn.textContent = 'OFF'
    }
})

function loop() {
    if(isTvOn){
        var imageData = c.createImageData(canvas.width, canvas.height);
        for (var i = 0, a = imageData.data.length; i < a; i++) {
            imageData.data[i] = (Math.random() * 255)|0;
        }
        c.putImageData(imageData, 0, 0);
        requestAnimationFrame(loop);
    }
}