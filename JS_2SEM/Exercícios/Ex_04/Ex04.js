canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;
c = canvas.getContext('2d');

let x = 350
let y = 250
c.beginPath();
c.fillStyle = "black";
c.fillRect(x,y,50,50);
c.fill();
document.addEventListener("keydown", (event) =>{
    if(event.key === "a")
    {
        if(x > 0)
        {
        c.clearRect(x,y,50,50)
        x -= 10
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(x,y,50,50);
        c.fill();
        }
    }else if(event.key === "d"){
        if(x < 750)
        {
        c.clearRect(x,y,50,50)
        x += 10
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(x,y,50,50);
        c.fill();
        }
    }else if(event.key === "s"){
        if(y < 550)
        {
        c.clearRect(x,y,50,50)
        y += 10
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(x,y,50,50);
        c.fill();
        }
    }else if(event.key === "w"){
        if(y > 0)
        {
        c.clearRect(x,y,50,50)
        y -= 10
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(x,y,50,50);
        c.fill();
        }
    }
})