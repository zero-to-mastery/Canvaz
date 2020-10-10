var vc1 = document.getElementById('c1');
var grayImage = null;
var originalImage = null;
function upload() {
  var fileip = document.getElementById('t1');
  originalImage = new SimpleImage(fileip);
  grayImage = new SimpleImage(fileip);
  originalImage.drawTo(vc1);
}
function monochromat() {
  for (var pixel of originalImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  vc1 = document.getElementById('c1');
  originalImage.drawTo(vc1);
}
