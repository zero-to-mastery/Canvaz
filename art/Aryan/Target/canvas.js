var can = document.getElementById("Canvas");
       var c = can.getContext("2d");
       can.width = window.innerWidth;
       can.height = window.innerHeight;
       
       c.strokeStyle = "#E80018";
       c.fillStyle = "#E80018";
       c.beginPath();
       c.arc(200,200,80,0,Math.PI * 2);
       c.fill();
       c.stroke();

       c.strokeStyle = "#FFFFFF";
       c.fillStyle = "#FFFFFF";
       c.beginPath();
       c.arc(200,200,55,0,Math.PI * 2);
       c.fill();
       c.stroke();

       c.strokeStyle = "#E80018";
       c.fillStyle = "#E80018";
       c.beginPath();
       c.arc(200,200,30,0,Math.PI * 2);
       c.fill();
       c.stroke();

