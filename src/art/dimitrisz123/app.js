var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var imageObj = new Image();
imageObj.src = "icon.png";
imageObj.onload = function () {
  context.drawImage(imageObj, 0, 0);
};
