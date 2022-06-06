var can = document.getElementById('Canvas');
       can.width = window.innerWidth;
       can.height = window.innerHeight;
       
       var c = can.getContext('2d');
       c.rotate(45 * Math.PI / 360);
       c.fillStyle = '#D2112C';
       c.fillRect(100,7,50,50);
       c.fillStyle = '#0078AC';
       c.fillRect(100,60,50,50);


       c.strokeStyle = "#FFFFFF";
       c.fillStyle = "#FFFFFF";
       c.beginPath();
       c.arc(125,30,5,0,Math.PI * 2);
       c.fill();
       c.stroke();

       c.strokeStyle = "#FFFFFF";
       c.fillStyle = "#FFFFFF";
       c.beginPath();
       c.arc(112,95,5,0,Math.PI * 2);
       c.fill();
       c.stroke();

       c.strokeStyle = "#FFFFFF";
       c.fillStyle = "#FFFFFF";
       c.beginPath();
       c.arc(135,75,5,0,Math.PI * 2);
       c.fill();
       c.stroke();