const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineWidth = 2
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

const randomColor = () => {
  const colorArray = [
    'hsl(60, 10%, 16%)',
    'hsl(196, 11%, 74%)',
    'hsl(76, 20%, 22%)',
    'hsl(24, 99%, 36%)',
  ]
  return colorArray[Math.floor(Math.random() * 4)]
}

const draw = () => {
  ctx.beginPath()
  ctx.fillStyle = randomColor()
  ctx.moveTo(canvas.width / 2, 151)
  ctx.lineTo(463, 220)
  ctx.lineTo(382, 193)
  ctx.lineTo(408, 353)
  ctx.lineTo(303, 284)
  ctx.lineTo(299, 317)
  ctx.lineTo(234, 298)
  ctx.lineTo(235, 363)
  ctx.lineTo(190, 362)
  ctx.lineTo(331, 497)
  ctx.lineTo(285, 543)
  ctx.lineTo(canvas.width / 2 - 20, 550)
  ctx.lineTo(canvas.width / 2 - 20, 665)
  ctx.lineTo(canvas.width / 2 + 20, 665)
  ctx.lineTo(canvas.width / 2 + 20, 550)
  ctx.lineTo(744, 542)
  ctx.lineTo(703, 490)
  ctx.lineTo(783, 363)
  ctx.lineTo(741, 362)
  ctx.lineTo(757, 299)
  ctx.lineTo(685, 322)
  ctx.lineTo(683, 275)
  ctx.lineTo(581, 342)
  ctx.lineTo(635, 189)
  ctx.lineTo(561, 211)
  ctx.lineTo(canvas.width / 2, 151)
  ctx.fill()
  ctx.stroke()
}

draw()
