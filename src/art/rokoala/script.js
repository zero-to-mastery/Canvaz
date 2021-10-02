let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

function tree(x, y, len, angle, width, c1, c2) {
  ctx.beginPath();
  ctx.save()
  ctx.strokeStyle = c1
  ctx.lineWidth = width
  ctx.translate(x, y)
  ctx.rotate(angle * Math.PI / 180)
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -len)
  ctx.stroke()

  if (len < 10) {
    ctx.restore();
    ctx.strokeStyle = c2
    ctx.lineTo(Math.random(), Math.random())
    ctx.stroke()
    return
  }

  tree(0, -len, len * 0.84, angle + 5 * Math.PI * Math.random(), width - (Math.random() + 0.5), c1, 'rgba(255,107,125,0.2)')
  tree(0, -len, len * 0.84, angle - 5 * Math.PI * Math.random(), width - (Math.random() + 0.5), c1, 'rgb(255,183,197)')
  ctx.restore()
}

tree(canvas.width / 2, canvas.height, 180, 0, 10, 'rgb(198,134,125)')