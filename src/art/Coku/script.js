let canvas = document.getElementById("myCanvas").getContext("2d");
let img = new Image();
img.onload = function() {
    canvas.drawImage(img, 10, 10, 480, 380);
};
img.src = "flag.png";