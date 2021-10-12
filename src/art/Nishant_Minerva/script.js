const canvas = document.getElementById('mydraw');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'gray';
ctx.fillRect(10, 10, 150, 100);


function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
        var w = 25;
        var v = 50;
      ctx.fillRect(w, w, 100, 100);
      ctx.clearRect(w, w, 60, 60);
      ctx.strokeRect(v, v, 50, 50);
      w+= 1;
      v+= 1;
    }
  }

  draw()

  draw()
  draw()
  draw()
  draw()
  draw()

  