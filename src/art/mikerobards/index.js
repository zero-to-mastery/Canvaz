const canvas = document.getElementById('uciWorlds')
const uciColors = canvas.getContext('2d')

uciColors.fillStyle = '#0464C8'
uciColors.fillRect(0, 0, 700, 100)

uciColors.fillStyle = '#C5010D'
uciColors.fillRect(0, 100, 700, 100)

uciColors.fillStyle = '#1B1716'
uciColors.fillRect(0, 200, 700, 100)

uciColors.fillStyle = '#E7D101'
uciColors.fillRect(0, 300, 700, 100)

uciColors.fillStyle = '#78B745'
uciColors.fillRect(0, 400, 700, 100)

uciColors.strokeRect(0, 0, 700, 500)
uciColors.stroke()
