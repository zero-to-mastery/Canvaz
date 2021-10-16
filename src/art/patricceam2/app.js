const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src =
  'https://images.theconversation.com/files/371524/original/file-20201126-17-6rujb9.jpg?ixlib=rb-1.1.0&rect=0%2C664%2C6000%2C3000&q=45&auto=format&w=668&h=324&fit=crop';
img.setAttribute('crossOrigin', '');

class Cell {
  constructor(x, y, symbol, color) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillText(this.symbol, this.x + 0.1, this.y + 0.1);
  }
}

class AsciiEffect {
  #imageCellArray = [];
  #pixels = [];
  #ctx;
  #width;
  #height;

  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.#ctx.drawImage(img, 0, 0, this.#width, this.#height);
    this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
  }

  #convertToSymbol(g) {
    if (g > 250) return '@';
    else if (g > 180) return '*';
    else if (g > 220) return '£';
    else if (g > 180) return '%';
    else if (g > 150) return '*';
    else if (g > 130) return '&';
    else if (g > 100) return '^';
    else if (g > 80) return '~';
    else if (g > 60) return '#';
    else if (g > 40) return 'W';
    else if (g > 20) return 'X';
    else return '';
  }
  #scanImg(cellSize) {
    this.#imageCellArray = [];
    for (let y = 0; y < this.#pixels.height; y += cellSize) {
      for (let x = 0; x < this.#pixels.width; x += cellSize) {
        const posX = x * 4;
        const posY = y * 4;
        const pos = posY * this.#pixels.width + posX;

        if (this.#pixels.data[pos + 3] > 128) {
          const red = this.#pixels.data[pos];
          const green = this.#pixels.data[pos + 1];
          const blue = this.#pixels.data[pos + 2];
          const total = red + green + blue;
          const averageColorValue = total / 3;
          const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
          const symbol = this.#convertToSymbol(averageColorValue);
          this.#imageCellArray.push(new Cell(x, y, symbol, color));
        }
      }
    }
  }

  #drawAscii() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    for (let i = 0; i < this.#imageCellArray.length; i++) {
      this.#imageCellArray[i].draw(this.#ctx);
    }
  }

  draw(cellSize) {
    this.#scanImg(cellSize);
    this.#drawAscii();
  }
}

let effect;
img.onload = function init() {
  canvas.width = img.width;
  canvas.height = img.height;
  effect = new AsciiEffect(ctx, img.width, img.height);
  effect.draw(3);
};
