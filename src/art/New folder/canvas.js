var can = document.getElementById('Canvas');
       can.width = window.innerWidth;
       can.height = window.innerHeight;

       var c = can.getContext('2d');

        c.fillStyle = '#f25022';
        c.fillRect( 100, 100, 100, 100);
        c.fillStyle = '#7fba00';
        c.fillRect(205,100,100,100);
        c.fillStyle = '#00a4ef';
        c.fillRect(100,205,100,100);
        c.fillStyle = '#ffb900';
        c.fillRect(205,205,100,100);