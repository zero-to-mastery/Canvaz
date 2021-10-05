// get the canvas and the context
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gap = 20
const width = 100

const colors = ['royalblue', 'yellow', '#6a26cd', '#fd019c', '#00ff22']

const pickRandomColor = () => {
    const choice = Math.floor(Math.random() * colors.length)
    return colors[choice]
}

const drawRect = (x, y, width, height, stroke_color, stroke_width) => {
    ctx.beginPath()
    ctx.rect(x, y, width, height)

    pickRandomColor()
    
    ctx.fillStyle = pickRandomColor()
    ctx.strokeStyle = pickRandomColor()
    
    // Math.random() > 0.5 ? ctx.stroke() : ctx.fill()
    ctx.fill()
}

const drawCircle = (x, y, radius, fill) => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    
    ctx.fillStyle = pickRandomColor()
    ctx.strokeStyle = pickRandomColor()
    
    // Math.random() > 0.5 ? ctx.stroke() : ctx.fill()
    ctx.fill()
}

const drawShapes = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for (i = 0; i < 5; i++) {

        for(j = 0; j < 5; j++) {
            
            x = gap + (gap + width) * i
            y = gap + (gap + width) * j
            
            Math.random() > 0.5 
                ? drawRect(x, y, width, width)
                : drawCircle(x + width / 2, y + width / 2, width / 2)
        }

    }
}

drawShapes()

setInterval(drawShapes, 1000)