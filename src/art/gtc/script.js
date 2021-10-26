var books = [
  { name: "The Name of the Wind", author: "Patrick Rothfuss", rating: "5/5" },
  { name: "Harry Potter", author: "J. K. Rowling", rating: "5/5" },
  { name: "The Wise Man's Fear", author: "Patrick Rothfuss", rating: "5/5" },
];

function draw(books) {
  var canvas = document.getElementById("drawing");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 120, 400, 10);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.fillStyle = "rgb(173, 117, 33)";
    ctx.stroke();
    ctx.fill();
    for (let i = 0; i < books.length; i++) {
      ctx.beginPath();
      ctx.rect(10 + 136 * i, 20, 100, 100);
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.stroke();
      ctx.fillStyle = "rgb(214, 255, 219)";
      ctx.fill();
      ctx.strokeText(books[i].name, 11 + 136 * i, 47, 95);
      ctx.strokeText(books[i].author, 11 + 136 * i, 77, 95);
      ctx.strokeText(books[i].rating, 11 + 136 * i, 107, 95);
    }
  }
}
