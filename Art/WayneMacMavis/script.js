const canvas = document.getElementById('lines');
const ctx = canvas.getContext('2d');
let width;
let height;
let id;

(() => {
  class Line {
    constructor(origin, size, length, color, style = 'pattern') {
      this.size = size;
      this.origin = origin;
      this.length = length;
      this.color = color;
      this.style = style;
      this.origin = `M${origin.x},${origin.y}`;
      this.offSet = 0;
      this.line = null;
      this.offSetSpeed = length / size;
    }
    getColorString() {
      return `hsla(${this.color.h}deg,${this.color.s}%,${this.color.l}%,${this.color.a})`;
    }
    generators() {
      return [
        {
          line: `h${this.size}`,
          mag: this.size
        },
        {
          line: `h-${this.size}`,
          mag: this.size
        },
        {
          line: `v${this.size}`,
          mag: this.size
        },
        {
          line: `v-${this.size}`,
          mag: this.size
        },
        {
          line: `l${this.size},${this.size}`,
          mag: Math.hypot(this.size, this.size)
        },
        {
          line: `l${this.size}-${this.size}`,
          mag: Math.hypot(this.size, this.size)
        },
        {
          line: `l-${this.size},${this.size}`,
          mag: Math.hypot(this.size, this.size)
        },
        {
          line: `l-${this.size}-${this.size}`,
          mag: Math.hypot(this.size, this.size)
        }
      ];
    }
    generate() {
      let segments = this.generators(this.size);
      let path = this.origin;
      let mag = 0;
      let fragment;
      let i;
      for (i = 0; i < this.length; i += 1) {
        fragment = segments[(Math.random() * segments.length) | 0];
        path += ` ${fragment.line}`;
        mag += fragment.mag;
      }
      this.line = {
        path,
        mag
      };
      return this;
    }
    renderStyle(style) {
      if (style === 'glitches') {
        ctx.lineDashOffset = this.line.mag + this.offSet;
        ctx.setLineDash([
          this.size ** 1.5,
          (this.line.mag / this.length) * this.size ** 2
        ]);
        this.offSet += 25;
        // this.size / (this.size ** 2);
        ctx.lineWidth = 4;
        return this;
      }
      if (style === 'pattern') {
        ctx.lineDashOffset = this.line.mag - this.offSet;
        ctx.setLineDash([this.line.mag, this.line.mag]);
        this.offSet += 200;
        //this.size / (this.size ** 100);
        ctx.lineWidth = 0.5;
      }
    }
    mutatePath() {
      let lineFragment = this.line.path.split(' ').slice(1);
      let generator = this.generators();
      lineFragment[(Math.random() * lineFragment.length) | 0] =
        generator[(Math.random() * generator.length) | 0].line;
      this.line.path = `${this.line.path.split(' ')[0]} ${lineFragment.join(
        ' '
      )}`;
    }
    draw() {
      !this.line && this.generate();

      ctx.strokeStyle = this.getColorString();
      this.renderStyle(this.style);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke(new Path2D(this.line.path));
      return this;
    }
  }
  function clear() {
    ctx.fillStyle = `hsla(240deg, 100%, 11%, 0.3)`;
    ctx.fillRect(0, 0, width, height);
  }
  function generateLines(amount) {
    let lines = [];
    let styles = [
      {
        size: 1.25,
        style: 'pattern',
        color: { h: 10, s: 100, l: 150, a: 0.3 }
      },
      { size: 2.5, style: 'pattern', color: { h: 190, s: 90, l: 50, a: 0.3 } },
      { size: 5, style: 'pattern', color: { h: 210, s: 70, l: 60, a: 0.2 } },
      { size: 10, style: 'pattern', color: { h: 310, s: 80, l: 55, a: 0.15 } },
      { size: 20, style: 'pattern', color: { h: 200, s: 25, l: 35, a: 0.12 } },
      { size: 20, style: 'pattern', color: { h: 210, s: 20, l: 40, a: 0.12 } },
      { size: 40, style: 'pattern', color: { h: 190, s: 40, l: 50, a: 0.12 } },
      { size: 80, style: 'pattern', color: { h: 220, s: 50, l: 60, a: 0.12 } },
      { size: 40, style: 'glitches', color: { h: 300, s: 100, l: 50, a: 0.3 } },
      { size: 20, style: 'glitches', color: { h: 210, s: 100, l: 50, a: 0.3 } },
      { size: 60, style: 'glitches', color: { h: 30, s: 100, l: 50, a: 0.3 } }
    ];
    for (let i = 0; i < amount; i += 1) {
      let style = styles[(Math.random() ** 2 * styles.length) | 0];
      lines.push(
        new Line(
          { x: width * 0.5, y: height * 0.5 },
          style.size,
          500 + Math.random() * 1000,
          style.color,
          style.style
        )
      );
    }
    return lines;
  }

  let resize = () => {
    id = cancelAnimationFrame(id);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const lines = generateLines(40);
    function update() {
      if (!(id % 3)) {
        clear();
        lines.forEach((line) => {
          line.draw();
          if (!(id % 5) && Math.random() > 0.95) {
            line.mutatePath();
          }
        });
      }
      id = requestAnimationFrame(update);
    }
    id = requestAnimationFrame(update);
  };
  window.addEventListener('resize', resize, {
    passive: true
  });
  resize();
})();
