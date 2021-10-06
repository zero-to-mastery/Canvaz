window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  var img = new Image();
  img.onload = function () {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = "https://media.istockphoto.com/photos/thank-you-picture-id1306527304?b=1&k=20&m=1306527304&s=170667a&w=0&h=BpaD5aH7gsbQHvl-HM0q-rHqOcwKu6XwcUo5w7N92EM=";
};
