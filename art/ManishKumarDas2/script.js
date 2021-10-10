// get the canvas and the context
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

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
    // ctx.fill()
    ctx.stroke()
}

const drawCircle = (x, y, radius, fill) => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    
    ctx.fillStyle = pickRandomColor()
    ctx.strokeStyle = pickRandomColor()
    
    // Math.random() > 0.5 ? ctx.stroke() : ctx.fill()
    // ctx.fill()
    ctx.stroke()
}

const drawShapes = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    document.querySelector(':root').style.setProperty('--borderClr', pickRandomColor())

    const N = 10
    const M = 20
    
    for (i = 0; i < N; i++) {

        for(j = 0; j < M; j++) {
            
            x = Math.random() * canvas.width
            y = Math.random() * canvas.width
            
            // Math.random() > 0.5 
            //     ? drawRect(x, y, Math.random() * width, Math.random() * width)
            //     : drawCircle(x + width / 2, y + width / 2, (Math.random() * width) / 2)
        
            drawCircle(x + width / 2, y + width / 2, (Math.random() * width) / 2)
        }

    }
}

drawShapes()

setInterval(drawShapes, 1000)