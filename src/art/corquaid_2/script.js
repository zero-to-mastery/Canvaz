let canvas = document.getElementById("canvas")
let c = canvas.getContext('2d')

// Earth
c.beginPath()
c.moveTo(0, 50)
c.lineTo(0, 400)
c.lineTo(200, 400)
c.arc(0, 400, 275, 90, 180, true)
c.fillStyle = '#3e7bba'
c.fill();
c.closePath()

// Clouds
c.beginPath()
c.moveTo(0, 150)
c.bezierCurveTo(154, 235, 133, 175, 160, 180);
c.moveTo(0, 230)
c.bezierCurveTo(162, 230, 180, 180, 223, 240);
c.moveTo(255, 300)
c.bezierCurveTo(250, 280, 50, 240, 0, 300);
c.moveTo(0, 380)
c.bezierCurveTo(162, 330, 200, 320, 270, 360);
c.fillStyle = "rgba(255,255,255,0.7"
c.fill()

// Moon
c.beginPath()
c.arc(50, 50, 15, 0, 2 * Math.PI)
c.fillStyle = 'white'
c.fill();
c.beginPath();
c.arc(40, 50, 15, 0, 2 * Math.PI)
c.fillStyle = 'black'
c.fill();

// Telescope
c.beginPath()
c.rotate(45 * Math.PI / 180);
c.fillStyle = 'white';
c.fillRect(250, -80, 100, 30);

c.fillStyle = 'silver'
c.fillRect(250, -60, 100, 10)
c.fillRect(295, -50, 5, 10)

c.fillStyle = 'white';
c.fillRect(295, -90, 5, 10)

c.moveTo(250, -80)
c.strokeStyle = 'black'
c.lineTo(220, -90)
c.lineTo(218, -85)
c.lineTo(250, -75)
c.lineTo(250, -80)
c.fill()
c.closePath()

// Solar panels
c.beginPath()
c.fillStyle = '#0d1f33'
c.fillRect(265, -115, 60, 25)
c.fillStyle = '#03101f'
c.fillRect(265, -40, 60, 25)
c.strokeStyle = '#edc200'
c.moveTo(270, -115)
c.lineTo(270, -90)
c.moveTo(280, -115)
c.lineTo(280, -90)
c.moveTo(290, -115)
c.lineTo(290, -90)
c.moveTo(300, -115)
c.lineTo(300, -90)
c.moveTo(310, -115)
c.lineTo(310, -90)
c.moveTo(320, -115)
c.lineTo(320, -90)
c.moveTo(270, -115)
c.lineTo(320, -115)
c.moveTo(270, -102.5)
c.lineTo(320, -102.5)
c.moveTo(270, -90)
c.lineTo(320, -90)
c.stroke()
c.closePath()

c.strokeStyle = '#937800'
c.moveTo(270, -40)
c.lineTo(270, -15)
c.moveTo(280, -40)
c.lineTo(280, -15)
c.moveTo(290, -40)
c.lineTo(290, -15)
c.moveTo(300, -40)
c.lineTo(300, -15)
c.moveTo(310, -40)
c.lineTo(310, -15)
c.moveTo(320, -40)
c.lineTo(320, -15)
c.moveTo(270, -40)
c.lineTo(270, -15)
c.moveTo(270, -40)
c.lineTo(320, -40)
c.moveTo(270, -27.5)
c.lineTo(320, -27.5)
c.moveTo(270, -15)
c.lineTo(320, -15)
c.stroke()
c.closePath()

// NASA logo
let image = new Image();
image.src = "./NASA_Worm_logo.svg"
image.addEventListener('load', () => {
    c.drawImage(image, 280, -75, 35, 10)
    c.closePath()
})

// Stars
c.beginPath();

c.fillStyle = 'yellow'
c.arc(30, 20, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(60, 20, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(400, -150, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(320, -180, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(400, 0, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(410, -50, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(470, -20, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(200, -20, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(180, -140, 2, 0, 2 * Math.PI, true)
c.closePath()
c.arc(130, -40, 2, 0, 2 * Math.PI, true)
c.closePath()
c.fill()

