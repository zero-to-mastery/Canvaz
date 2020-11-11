function getImage() {
  var c = document.getElementById('abhishek-canvas');
  var ctx = c.getContext('2d');
  var img = document.getElementById('prof-img');
  ctx.drawImage(img, 10, 10);
}
