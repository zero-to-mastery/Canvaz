const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//functions for Snow X position
function randRGBValue(){
    return Math.floor(Math.random()*225);
}
for (let i=0; i<=600; i++){
    context.fillStyle = `rgb(${randRGBValue()},${randRGBValue()},${randRGBValue()})`;
    context.fillRect(i*20, 0, 20, 400);

}
