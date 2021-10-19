let Canva = document.getElementById("appleCanvas").getContext("2d");
let Img = new Image();
Img.onload = function() {
    Canva.drawImage(Img, 150, 25, 400, 500);
}
Img.src = "apple-logo.png";