var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var radius = 5;

var slider = document.getElementById('slider');
slider.addEventListener('change', function(){
    radius = slider.value;
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw();
})

function draw() {
    var w = 30;
    var h = 30;
    for (var x = 20; x < width; x+=w) {
        for (var y = 20; y < height; y+=h) {
            context.fillStyle = '#fff';   
            context.fillRect(x-radius/2,y-radius/2,radius,radius);
        }
    }
}

draw();