const canvas = document.getElementById('mycanvas')
const context = canvas.getContext('2d')

// L_TRI
context.beginPath()
context.moveTo(0, 100)
context.lineTo(0, 300)
context.lineTo(200, 200)
context.fillStyle = 'white'
context.fill()

// R_TRY
context.beginPath()
context.moveTo(400, 200)
context.lineTo(600, 100)
context.lineTo(600, 300)
context.fillStyle = 'white'
context.fill()

// MIDDLE_block
context.fillStyle = 'black'
context.fillRect(290, 250, 20, 100)

// TEXT
context.font = '30px sans-serif'
context.fillStyle = 'black'
context.fillText('A world of', 230, 150)
context.fillText('Web Developer', 190, 185)
context.font = '20px sans-serif'
context.fillStyle = 'white'
context.fillText('Happy to Hack Open Source', 175, 40)
context.fillText('__________________________', 160, 50)
context.fillText('Welcome to Hacktoberfest! 2021', 160, 90)

//EYES
context.beginPath()
context.arc(145, 200, 10, 0, Math.PI * 2, true)
context.fillStyle = 'black'
context.fill()
context.beginPath()
context.arc(445, 200, 10, 0, Math.PI * 2, true)
context.fill()
