var canvas = document.querySelector("#myCanvas");

const ctx = canvas.getContext('2d');

ctx.font = '30px serif';
ctx.fillText('Click me', 90, 80);


function setGradient(a, b) {
    canvas.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
    css.value = canvas.style.background + ";";
}

function randomRGBGenerator() {
    var r = toHex(Math.random() * 255);
    var g = toHex(Math.random() * 255);
    var b = toHex(Math.random() * 255);
    return "#" + r + g + b;
}

function toHex(d) {
    return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
}

function setRandomCombination() {
    let color1 = randomRGBGenerator();
    let color2 = randomRGBGenerator();
    setGradient(color1, color2);
    setRandomCombination();
}

canvas.addEventListener("click", setRandomCombination)