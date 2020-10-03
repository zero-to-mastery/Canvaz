function draw() {
  var myCanvas = document.getElementById('canvas');
  if (myCanvas.getContext) {
    var flag = myCanvas.getContext('2d');

    flag.moveTo(0, 0);
    flag.lineTo(150, 150);
    flag.stroke();
    flag.lineWidth = 20;
    flag.strokeStyle = 'white';

    flag.moveTo(150, 0);
    flag.lineTo(0, 150);
    flag.stroke();
  }
}
