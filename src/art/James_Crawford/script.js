const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let str = ''
let str2 = ''

// Get clock (main method)
function getClock() {
  // Updates time after each second
  let d = new Date()

  str = Time(d.getHours(), d.getMinutes(), d.getSeconds())
  str2 = TodaysDate(d.getDate(), d.getMonth(), d.getFullYear())

  context.clearRect(0, 0, 550, 300)

  // Background elements
  context.fillStyle = '#333'
  context.fillRect(0, 0, 400, 150)

  context.fillStyle = '#666'
  context.fillRect(0, 150, 275, 150)

  context.fillStyle = '#777'
  context.fillRect(275, 150, 275, 150)

  // Text elements
  context.font = '56pt arial'
  context.fillStyle = 'orange'
  context.fillText(str, 25, 130)

  context.font = '18pt arial'
  context.fillStyle = 'white'
  context.fillText(str2, 25, 185)

  var img = new Image() // Create new img element
  img.src = './hacktoberfest.png'
  const ctx = context
  img.onload = function () {
    ctx.drawImage(img, 430, 35, 85, 85)
  }
}

// Set time to appropriate text
function Time(hour, min, sec) {
  var curTime
  if (hour < 10) curTime = '0' + hour.toString()
  else curTime = hour.toString()

  if (min < 10) curTime += ':0' + min.toString()
  else curTime += ':' + min.toString()

  if (sec < 10) curTime += ':0' + sec.toString()
  else curTime += ':' + sec.toString()

  return curTime
}

// Set ordinal suffix for day
function ordinal_suffix(i) {
  var j = i % 10,
    k = i % 100
  if (j == 1 && k != 11) {
    return i + 'st'
  }
  if (j == 2 && k != 12) {
    return i + 'nd'
  }
  if (j == 3 && k != 13) {
    return i + 'rd'
  }
  return i + 'th'
}

// Construct todays date string
function TodaysDate(day, month, year) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let today = `${ordinal_suffix(day)}-${months[month]}-${year}`
  return today
}

setInterval(getClock, 1000)
