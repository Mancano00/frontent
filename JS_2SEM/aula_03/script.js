//Atribuindo a uma variável o elemento selecionado
canvas = document.querySelector('canvas');

//Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//A variável c se torna um objeto onde pode ser atribuido métodos
c = canvas.getContext('2d');

//Atribuindo propriedades e métodos ao nosso objeto
//posições(x, y, width, height)
c.fillStyle = "blue";
c.fillRect(100,100,150,50);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(150,50,50,150);
c.fillRect(100,300,300,100);

//Desenhando uma linha
c.beginPath();
//Posição inicial da linha
c.moveTo(50,450);
c.lineTo(700,50);
c.lineTo(500,300);
c.lineTo(700,300);
c.strokeStyle = "black";
c.stroke();
c.closePath();

//Criando um circulo
//Posições para criar
//(x r, y,aio, anguloInicial, anguloFinal)
c.beginPath()
c.arc(500, 450, 100, 0, Math.PI * 2);
c.fillStyle = "blue";
c.stroke();
c.fill();
c.closePath();

for(var i = 0; i < 10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath();
    c.arc(x, y, Math.random() * 100, 0, Math.PI *2);
    c.fillStyle = "rgba("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+",0.5)";
    c.stroke();
    c.fill();
    c.closePath();
}