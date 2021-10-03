/**
 * Cyrus (Milad) Mobini
 * Github: https://github.com/milad2281
 * Website: https://ecocyrus.com
 */

// initializing the variables
const container = document.getElementById("container");
const canvas = document.getElementById("canvas");
const canvasHeight = container.offsetHeight - 10;
const canvasWidth = container.offsetWidth - 10;

class Zombie {
  xp;
  speed;
  size;
  id;
  dom;
  container;
  player;
  x;
  y;
  dx = 1;
  dy = 1;
  alive;

  constructor(xp, speed, size, container, player) {
    this.xp = xp;
    this.size = size;
    this.speed = speed;
    this.container = container;
    this.player = player;
    this.x = Math.max(Math.floor(Math.random() * canvasWidth), 100);
    this.y = Math.max(Math.floor(Math.random() * canvasHeight), 100);
    this.alive = true;
    this.generate();
  }

  move() {
    // Changing Y direction
    if (this.y >= canvasHeight) this.dy = 1;
    else if (this.y <= 0) this.dy = 0;
    // Moving in Y
    if (this.y < canvasHeight && this.dy == 0) {
      this.y += 10;
    } else if (this.y > 0 && this.dy == 1) this.y -= 10;
    // Changing X direction
    if (this.x >= canvasWidth) this.dx = 1;
    else if (this.x <= 0) this.dx = 0;
    // Moving in X
    if (this.x < canvasWidth && this.dx == 0) {
      this.x += 10;
    } else if (this.x > 0 && this.dx == 1) this.x -= 10;
    //Sudden Change movement
    if (Math.random() < 0.03) {
      this.dx = this.dx == 1 ? 0 : 1;
    }
    if (Math.random() < 0.03) {
      this.dy = this.dy == 1 ? 0 : 1;
    }
    // Setting the location
    this.dom.style.top = this.y + "px";
    this.dom.style.left = this.x + "px";
  }

  die() {
    if (this.alive) {
      this.alive = false;
      clearInterval(this.id);
      this.player.addXP(this.xp);
      this.dom.classList.add("dying");
      setTimeout(() => {
        this.container.removeChild(this.dom);
        delete this;
      }, 2000);
    }
  }

  generate() {
    this.dom = document.createElement("img");
    this.dom.classList.add("zombie");
    this.dom.src =
      this.size == 1 ? "./asset/zombie1.png" : "./asset/zombie0.png";
    // Baby Zombie boost
    if (this.size === 0) {
      this.speed / 5;
    }
    this.dom.style.top = this.y + "px";
    this.dom.style.left = this.x + "px";
    this.container.appendChild(this.dom);
    this.dom.addEventListener("mouseover", (e) => {
      this.die();
    });

    this.id = setInterval(() => {
      this.move();
    }, this.speed);
  }
}

class Player {
  xp = 0;
  level = 1;
  domXP;
  domLvl;
  threshold = 6;
  weapon;
  weapons = {
    1: "./asset/sword_wooden.png",
    2: "./asset/sword_stone.png",
    3: "./asset/sword_iron.png",
    4: "./asset/sword_gold.png",
    5: "./asset/sword_diamond.png",
  };

  constructor(lvl, xp) {
    this.domLvl = lvl;
    this.domXP = xp;
    this.weapon = this.weapons[1];
  }

  levelUp() {
    if (this.level < 5) {
      this.level++;
      this.weapon = this.weapons[this.level];
    }
  }

  updateDom() {
    this.domLvl.innerText = "Level: " + this.level;
    this.domXP.innerText = "XP: : " + this.xp;
  }

  addXP(xp) {
    this.xp += xp;
    if (this.xp > this.level ** this.threshold + 250) {
      this.levelUp();
    }
    this.updateDom();
  }
}

function initial() {
  // setting up the dom
  const welcome = document.createElement("div");
  welcome.innerText = "Click to start";
  welcome.classList.add("title");
  container.appendChild(welcome);

  const detail = document.createElement("div");
  detail.classList.add("detail");

  const lvl = document.createElement("p");
  lvl.innerText = "Level: 1";
  lvl.classList.add("level");
  detail.appendChild(lvl);

  const domXp = document.createElement("p");
  domXp.innerText = "XP: 0";
  domXp.classList.add("xp");
  detail.appendChild(domXp);

  container.appendChild(detail);
  // Create Player
  const player = new Player(lvl, domXp);
  // Click listener
  let running = false;
  container.addEventListener("click", (event) => {
    animate();
    if (!running) {
      running = true;
      // Zombie Generator
      setInterval(() => {
        if (document.getElementsByClassName("zombie").length < 20) {
          const xp = Math.floor(Math.random() * 30);
          const speed = Math.max(Math.floor(Math.random() * 150), 30);
          const size = Math.random() < 0.5 ? 0 : 1;
          new Zombie(xp, speed, size, container, player);
        }
      }, 500);
      container.removeChild(welcome);
    }
  });

  //Setting up the canvas
  const m = {
    x: innerWidth / 2,
    y: innerHeight / 2,
  };
  window.onmousemove = function (e) {
    m.x = e.clientX;
    m.y = e.clientY;
  };

  c = canvas.getContext("2d");
  resize();
  animate();

  window.onresize = function () {
    resize();
  };
  function resize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
  }
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    let cursor = new Image();
    cursor.src = player.weapon;
    c.drawImage(cursor, m.x, m.y, 35, 35);
  }
}

window.addEventListener("load", (event) => {
  initial();
});
