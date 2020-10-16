function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw() {
  var canvas = document.getElementById('canvas');
  canvas.width = 600;
  canvas.height = 600;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    let i = 0;
    let j = 0;
    let tot = 600;
    while (tot > 0) {
      var t = Math.min(randomizer(0, 15), tot);
      let len = 600;
      j = 0;
      while (len > 0) {
        var l = Math.min(randomizer(0, 15), len);
        var r = randomizer(0, 255);
        var g = randomizer(0, 255);
        var b = randomizer(0, 255);
        var s = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        ctx.fillStyle = s;
        console.log(i, j, t, l);
        ctx.fillRect(i, j, t, l);
        j += l;
        len -= l;
      }
      i += t;
      tot -= t;
    }
  }
}
