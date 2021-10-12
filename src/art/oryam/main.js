//HTML5 Canvas:
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
//https://www.w3schools.com/graphics/canvas_intro.asp

const BRUSH_SIZE_VALUE_ID = 'brushSizeVal';
const BRUSH_COLOR_VALUE_ID = 'brushColorVal';
const MOUSE_POSITION_ID = 'mousePos';
const BRUSH_SIZE_ID = 'brushColor';
const BRUSH_COLOR_ID = 'brushSize';
const BG_COLOR_ID = 'bgColor';
const SAVE_BUTTON_ID = 'saveBtn';
const LOAD_FILE_BUTTON_ID = 'fileLoadBtn';
const CANVAS_ID = 'paintCanvas';

function painter() {
  const canvas = document.getElementById(CANVAS_ID);
  const ctx = canvas.getContext('2d');

  let paintState = {
    brushColor: '#000000',
    brushSize: '11',
    isDrawing: false,
    mousePos: { x: 0, y: 0 },
  };

  let { brushColor, brushSize, isDrawing, mousePos } = paintState;

  const onBrushSizeChange = (event) => {
    brushSize = event.target.value;
    document.getElementById(BRUSH_SIZE_VALUE_ID).innerHTML = brushSize;
  };

  const onBrushColorChange = (event) => {
    brushColor = event.target.value;
    document.getElementById(BRUSH_COLOR_VALUE_ID).innerHTML = color;
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const onBgChange = (event) => {
    clearCanvas();
    ctx.fillStyle = event.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill(); // creates new rectangle with the bgColor value in the size of the canvas
  };

  //loading image from user computer files
  //https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
  const loadImage = () => {
    const file = document.getElementById('fileLoadBtn').files[0]; //getting file data from input
    const image = new Image(); //create new html img element
    image.src = URL.createObjectURL(file); //create a file url string and assign it to the img src tag
    image.onload = () =>
      ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
  };

  //https://weworkweplay.com/play/saving-html5-canvas-as-image/
  const saveImage = (event) => {
    const dataURL = canvas.toDataURL('image/png'); //creates image url from the canvas
    event.target.href = dataURL; //assign the url to href tag of the button
  };

  const updateMouseCoordinates = (event) => {
    //reduce the canvas offsets position to get the mouse coordinates relative to the canvas
    mousePos.x = event.clientX - canvas.offsetLeft;
    mousePos.y = event.clientY - canvas.offsetTop;
    if (
      // validate mouse inside the canvas
      mousePos.x < 0 ||
      mousePos.x > canvas.width ||
      mousePos.y < 0 ||
      mousePos.y > canvas.height
    ) {
      mousePos.x = 0;
      mousePos.y = 0;
    }
    document.getElementById(
      MOUSE_POSITION_ID
    ).innerHTML = `${mousePos.x},${mousePos.y}`;
  };

  const draw = (event) => {
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    updateMouseCoordinates(event);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.stroke();
  };

  const onMouseMove = (event) => {
    isDrawing ? draw(event) : updateMouseCoordinates(event);
  };

  const onMousedown = () => {
    isDrawing = true;
  };

  const onMouseup = () => {
    isDrawing = false;
  };

  document
    .getElementById(BRUSH_SIZE_ID)
    .addEventListener('change', (event) => onBrushColorChange(event));
  document
    .getElementById(BRUSH_COLOR_ID)
    .addEventListener('change', (event) => onBrushSizeChange(event));
  document
    .getElementById(BG_COLOR_ID)
    .addEventListener('change', (event) => onBgChange(event));
  document.getElementById('clearBtn').addEventListener('click', clearCanvas);
  document
    .getElementById(SAVE_BUTTON_ID)
    .addEventListener('click', (event) => saveImage(event));
  document
    .getElementById(LOAD_FILE_BUTTON_ID)
    .addEventListener('change', loadImage);
  canvas.addEventListener('mousemove', (event) => onMouseMove(event));
  canvas.addEventListener('mousedown', onMousedown);
  canvas.addEventListener('mouseup', onMouseup);
}
painter();
