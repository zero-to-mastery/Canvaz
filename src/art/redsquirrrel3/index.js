const img = new Image();

img.src =
  'https://media.istockphoto.com/photos/studio-shot-of-an-adorable-german-shepherd-dog-looking-up-curiously-picture-id1189292375?k=20&m=1189292375&s=612x612&w=0&h=LmIctICu4Ffbm7OENsqJsOKfDMIaeC3GEuURDckYgBM=';
img.setAttribute('crossOrigin', '');

img.addEventListener('load', function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 612;
  canvas.height = 506;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let particlesArray = [];
  const numberOfParticles = 5000;

  let mappedImage = [];

  for (let y = 0; y < canvas.width; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [(cellBrightness = brightness), (cellColor = color)];
      row.push(cell);
    }
    mappedImage.push(row);
  }

  function calculateRelativeBrightness(red, green, blue) {
    return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 120;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 0.4;
      this.size = Math.random() * 2 + 0.5;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
    }
    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      this.speed = mappedImage[this.position1][this.position2][0];
      let movement = 2.5 - this.speed + this.velocity;

      this.x += movement;
      if (this.x >= canvas.width) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }
    }
    // draw each particle
    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();
  function animate() {
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'rgba(0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.2;

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.3;
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
});
