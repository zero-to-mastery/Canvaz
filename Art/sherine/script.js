window.onload = function () {
  var canvas = document.getElementById('img-src');
  var ctx = canvas.getContext('2d');
  var img = document.getElementById('ztm');
  ctx.drawImage(img, 10, 10);
};
