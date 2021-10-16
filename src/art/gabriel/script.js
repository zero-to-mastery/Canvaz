function draw() {
    var canvas = document.getElementById('drawing');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(180, 300, 40, 100);   
        ctx.stroke();
        ctx.fillStyle = 'rgb(195, 187, 187)';
        ctx.fill();
        ctx.beginPath();
        ctx.rect(174, 320, 5, 10);   
        ctx.stroke();
        ctx.fillStyle = 'rgb(195, 187, 187)';
        ctx.fill();
      }
}
var pos = 290;
function activate() {
  var canvas = document.getElementById('drawing');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      pos--;
      if(pos < 40) {
          return;
      }
      else if(pos < 260){
          ctx.beginPath();
          ctx.arc(200, pos, 15, 0, 2 * Math.PI);
          ctx.fillStyle = 'rgb(0, 255 , 0)';
          ctx.fill(); 
      }
      else{
          ctx.beginPath();
          ctx.rect(185, pos, 30, 10);
          ctx.fillStyle = 'rgb(0, 255 , 0)';
          ctx.fill();
      }
      setInterval(activate, 40);
  }
}