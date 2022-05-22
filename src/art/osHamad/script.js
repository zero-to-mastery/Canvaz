const canvas = document.getElementById('pixel-canvas')
const ctx = canvas.getContext('2d')
document.getElementById('clear-canvas').addEventListener('click', ()=>{
    ctx.clearRect(0, 0, 500, 500)
})
  
canvas.addEventListener('click', function(event) {
    const color = document.getElementById('color-select').value
    const size = parseInt(document.getElementById('size-select').value)
    const x = Math.floor(event.layerX/size)
    const y = Math.floor(event.layerY/size)
    ctx.fillStyle = color
    ctx.fillRect(x*size, y*size, size+1, size+1)
})