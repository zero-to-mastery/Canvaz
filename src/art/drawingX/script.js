function drawing(num1, num2, num3) {
  let ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 0; i < 28; i++) {
    for (let j = 0; j < 28; j++) {
      for (let k = 0; k < 20; k++) {
        ctx.fillStyle =
          "rgb(" +
          Math.floor(255 - num1 * i) +
          "," +
          Math.floor(255 - num2 * j) +
          "," +
          Math.floor(255 - num3 * k) +
          ")";

        ctx.fillRect(10 * i, 10 * i, 30, 30);
        ctx.fillRect(270 - 10 * j, 10 * j, 30, 30);
      }
    }
  }
}

window.onload = drawing(10, 10, 10);
