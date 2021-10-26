(function () {
  'use strict';

  class Game {

    constructor(config) {

      this.paused = false;
      this.context = config.canvas.getContext('2d');
      this.objects = config.objects;
      this.gravity = config.gravity;
      this.controller = config.controller;

      let previousTime = 0;
      let currentTime = Date.now();

      this.loop = () => {
        if (this.paused) {
          return;
        }

        previousTime = currentTime;
        currentTime = Date.now();

        const delta = currentTime - previousTime;

        this.update(delta / 100);
        this.render();
        window.requestAnimationFrame(this.loop);
      }
    }

    approach(goal, current, delta) {
      const diff = goal - current;
      if (diff > delta) {
        return current + delta;
      }
      if (diff < -delta) {
        return current - delta;
      }
      return goal;
    }

    keepObjectInside(object) {
      if (object.position.x < 0) {
        object.position = new Vector(0, object.position.y);
        object.velocity = new Vector(0, object.velocity.y);
      } else if (object.position.x + object.width > this.context.canvas.width) {
        object.position = new Vector(
          this.context.canvas.width - object.width,
          object.position.y
        );
        object.velocity = new Vector(0, object.velocity.y);
      }

      if (object.position.y < 0) {
        object.position = new Vector(object.position.x, 0);
        object.velocity = new Vector(object.velocity.x, 0);
      } else if (object.position.y + object.height > this.context.canvas.height) {
        object.position = new Vector(
          object.position.x,
          this.context.canvas.height - object.height,
        );
        object.velocity = new Vector(object.velocity.x, 0);

        if (object.jumping) {
          object.jumping = false;
          object.huh.pause();
          object.huh.currentTime = 0;
        }
      }
    }

    isCollide(object1, object2) {
      const o1Corners = object1.getCorners();
      const o2Corners = object2.getCorners();
      return o1Corners.topLeft.x < o2Corners.topRight.x
        && o1Corners.topRight.x > o2Corners.topLeft.x
        && o1Corners.topLeft.y <= o2Corners.bottomLeft.y
        && o1Corners.bottomLeft.y >= o2Corners.topLeft.y
    }

    update(delta) {

      this.objects.forEach((object) => {

        if (this.controller.object === object) {
          if (this.controller.left) {
            object.velocity.x -= 1;
            object.orientation = 'left';
          } else if (this.controller.right) {
            object.velocity.x += 1;
            object.orientation = 'right';
          } else {
            object.velocity.x = 0;
          }
          if (this.controller.up) {
            if (!object.jumping) {
              object.huh.play();
              object.velocity.y -= 15;
              object.jumping = true;
            }
          }
        }

        object.velocity = new Vector(
          object.velocity.x * .7,
          object.velocity.y + this.gravity.y
        );

        object.oldPosition = object.position;

        object.position = new Vector(
          object.position.x + object.velocity.x,
          object.position.y + object.velocity.y
        );

        this.keepObjectInside(object);
      });
    }

    render() {
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

      this.objects.forEach((object) => {
        object.render(this.context);
      });
    }

    start() {
      this.paused = false;
      window.requestAnimationFrame(this.loop);
    }

    pause() {
      this.paused = true;
    }

  }

  class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  class Animation {

    constructor(sprite, frameWidth, frameHeight, frameSpeed) {
      this.sprite = sprite;
      this.frameWidth = frameWidth;
      this.frameHeight = frameHeight;
      this.frameSpeed = frameSpeed;
      this.frameCount = sprite.width / frameWidth;
      this.currentFrame = 0;
      this.counter = 0;
    }

    animate() {
      if (this.counter === this.frameSpeed - 1) {
        this.currentFrame = (this.currentFrame + 1) % this.frameCount;
      }
      this.counter = (this.counter + 1) % this.frameSpeed;
    }

    getCurrentFrame() {
      return this.currentFrame;
    }
  }

  class Entity {
    constructor(options = {}) {

      this.width = options.width || 0;
      this.height = options.height || 0;
      this.color = options.color || 'blue';
      this.scale = options.scale || 1;
      this.orientation = options.orientation || 'right';

      this.position = options.position || new Vector(0, 0);
      this.oldPosition = this.position;
      this.velocity = options.velocity || new Vector(0, 0);
      this.velocityGoal = new Vector(0, 0);

      this.idle = new Image();
      this.idle.onload = () => {
        this.animation = new Animation(this.idle, 19, 34, 4);
      };
      this.idle.src = './assets/idle.png';

      this.run = new Image();
      this.run.onload = () => {
        this.runAnimation = new Animation(this.run, 21, 33, 4);
      };
      this.run.src = './assets/run.png';

      this.jump = new Image();
      this.jump.onload = () => {
        this.jumpAnimation = new Animation(this.jump, 17, 34, 1);
      };
      this.jump.src = './assets/jump.png';

      this.landing = new Image();
      this.landing.onload = () => {
        this.landingAnimation = new Animation(this.landing, 20, 35, 1);
      };
      this.landing.src = './assets/landing.png';

      this.huh = new Audio('./assets/huh2.wav');
    }

    getCorners() {
      const corners = {
        topLeft: new Vector(this.position.x, this.position.y),
        topRight: new Vector(this.position.x + this.width, this.position.y),
        bottomLeft: new Vector(this.position.x, this.position.y + this.height),
        bottomRight: new Vector(this.position.x + this.width, this.position.y + this.height)
      };
      return corners;
    }

    render(context) {
      let currentFrame = 0;
      let flip = this.orientation === 'left' ? -1 : 1;
      let animation = this.animation;
      let image = this.idle;
      if (this.oldPosition.y > this.position.y) {
        animation = this.jumpAnimation;
        image = this.jump;
      } else if (this.oldPosition.y < this.position.y) {
        animation = this.landingAnimation;
        image = this.landing;
      } else if (this.oldPosition.x > this.position.x) {
        animation = this.runAnimation;
        image = this.run;
      } else if (this.oldPosition.x < this.position.x) {
        animation = this.runAnimation;
        image = this.run;
      }

      if (!animation) {
        return;
      } else {
        animation.animate();
        currentFrame = animation.getCurrentFrame();
      }

      context.save();
      context.translate(0, 0);
      context.scale(flip, 1);
      context.drawImage(
        image,
        currentFrame * animation.frameWidth,
        0,
        animation.frameWidth,
        animation.frameHeight,
        flip * this.position.x,
        this.position.y,
        flip * animation.frameWidth * this.scale,
        animation.frameHeight * this.scale
      );
      context.restore();
    }
  }

  class Player extends Entity {
    constructor(options) {
      super(options);
      this.jumping = false;
    }
  }

  class KeyboardController {
    constructor(config) {

      this.left = false;
      this.right = false;
      this.up = false;
      this.down = false;

      this.global = config.global;
      this.object = config.object;

      this.global.addEventListener('keydown', this.keyListener.bind(this));
      this.global.addEventListener('keyup', this.keyListener.bind(this));
    }

    keyListener(e) {
      const keyDown = e.type === 'keydown';
      switch (e.keyCode) {
        case 37: {
          this.left = keyDown;
          break;
        }
        case 39: {
          this.right = keyDown;
          break;
        }
        case 32: {
          this.up = keyDown;
          break;
        }
        case 40: {
          this.down = keyDown;
          break;
        }
      }
    }
  }

  class ViewController {

    constructor(config) {

      this.global = config.global;
      this.pauseButton = document.getElementById('pause');
      this.startButton = document.getElementById('start');
      this.canvas = document.getElementById('root');

      this.canvas.width = 500;
      this.canvas.height = 300;

      this.addEventListeners();

      const player = new Player({
        width: 19,
        height: 34,
      });

      const controller = new KeyboardController({
        global: this.global,
        object: player,
      });

      this.game = new Game({
        canvas: this.canvas,
        gravity: new Vector(0, 1.5),
        controller,
        objects: [
          player,
        ]
      });
    }

    init() {
      this.game.start();
      this.pauseButton.style.display = 'inline';
      this.startButton.style.display = 'none';
    }

    addEventListeners() {

      this.pauseButton.addEventListener('click', () => {
        this.game.pause();
        this.pauseButton.style.display = 'none';
        this.startButton.style.display = 'inline';
      });

      this.startButton.addEventListener('click', () => {
        this.game.start();
        this.pauseButton.style.display = 'inline';
        this.startButton.style.display = 'none';
      });
    }

  }

  const vc = new ViewController({
    global: window
  });

  vc.init();

})();
