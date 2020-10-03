var paint = false;

var painterase = 'paint';

var canvas = document.getElementById('painthere');

var context = canvas.getContext('2d');

var mouse = {
  x: 0,
  y: 0
};

if (localStorage.getItem('imagecanvas') != null) {
  var image = new Image();
  image.onload = function () {
    context.drawImage(image, 0, 0);
  };

  image.src = localStorage.getItem('imagecanvas');
}

//set drawing parameters

context.lineWidth = 1;
context.lineJoin = 'round';
context.lineCap = 'round';

document
  .querySelector('#container3')
  .addEventListener('mousedown', function (event) {
    paint = true;

    context.beginPath();

    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop;

    context.moveTo(mouse.x, mouse.y);
  });

document
  .querySelector('#container3')
  .addEventListener('mousemove', function (event) {
    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop;

    if (paint) {
      if (painterase == 'paint') {
        context.strokeStyle = document.querySelector('#color input').value;
      } else {
        context.strokeStyle = 'White';
      }

      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    }
  });

document.querySelector('#container3').addEventListener('mouseup', function () {
  paint = false;
});

document
  .querySelector('#container3')
  .addEventListener('mouseleave', function () {
    paint = false;
  });

document.querySelector('#erase').addEventListener('click', function () {
  if (painterase == 'paint') {
    painterase = 'erase';
  } else {
    painterase = 'paint';
  }
});

document.querySelector('#reset').addEventListener('click', function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  painterase = 'paint';
});

document.querySelector('#save').addEventListener('click', function () {
  if (typeof localStorage != null) {
    localStorage.setItem('imagecanvas', canvas.toDataURL());
  } else {
    window.alert('Your browser does not supports local storage !');
  }
});

document.querySelector('#color input').addEventListener('change', function () {
  document.querySelector('#strokesize').css('background', document.this.value);
});

document.querySelector('#slider').addEventListener('change', function (event) {
  console.log(event.target.value);
  document.querySelector(
    '#strokesize'
  ).style.height = `${event.target.value}px`;
  document.querySelector('#strokesize').style.width = `${event.target.value}px`;
  context.lineWidth = event.target.value;
});
