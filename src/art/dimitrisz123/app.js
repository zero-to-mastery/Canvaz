var c = document.getElementById("mycanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var $ = c.getContext('2d');
        var numbers = 600;
        var p = [];
        console.log((Math.random() * 2));

        function create() {
            for (var i = 0; i < numbers; i++) {
                var d = {
                    x: Math.random() * c.width
                    , y: Math.random() * c.height
                    , vy: (Math.random() * 10) + 5
                }
                p.push(d);
            }
        }

        function update() {
            base_image = new Image();
            base_image.src = 'icon.png';
            $.drawImage(base_image, 0, 0, c.width,c.height);

            for (var i = 0; i < numbers; i++) {
                p[i].y += p[i].vy;
                if (p[i].y + 10 > c.height || p[i].y < 0) {
                    p[i].y = 0;
                }

                $.fillStyle = "white";
                $.globalAlpha = 0.6;

                $.fillRect(p[i].x, p[i].y, 1, 15);
            }
        }
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();

        function run() {
            update();
            window.requestAnimFrame(run);
        }
        create();
        window.requestAnimFrame(run);