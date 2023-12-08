const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;


const context = canvas.getContext("2d");
const corEscolhida = document.querySelector("#corEscolhida");
const botao = document.querySelector("#limpar");
let pintando = false;




//Define a variavel como true indicando que o usuario começou a pintura
canvas.addEventListener('mousedown', () =>{
    pintando = true;
});


//Define a variavel como false indicando que o usuario finalizou parte da pintura
canvas.addEventListener('mouseup', () =>
{
    pintando = false;
    context.beginPath();//começa uma nova trajetória
});


//A ação e iniciada assim que o mouse se move, desde que o mousedown continue pressionado
canvas.addEventListener('mousemove', draw);


//seleciona a cor a ser utilizada
corEscolhida.addEventListener('input', atualizaCor);


//chamamos a função draw e passamos o event como parametro.
//O event é um objeto que contem atributos que são acionados de acordo com o evento ocorrido
function draw(event){
    //se pintando for false, returna a tela sem que haja modificação
    if(!pintando) return;
   
    //os atributos clientx e clientY são atributos do evento que retornam a posição em relação ao canvas
    const {clientX, clientY} = event;
   
    //obtem as coordenadas do canto esquerdo do topo , isso nos da as coordenadas x e y do canvas
    const {left, top} = canvas.getBoundingClientRect();
   
    //subtrai as coordenadas do canvas nos dando as coordenadas relativas ao canvas
    const x = clientX - left;
    const y = clientY - top;




    context.lineTo(x,y);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);
}


//função para atualizar a cor da linha dentro do canvas
function atualizaCor(event){
    context.strokeStyle = event.target.value;
}
function limpar()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}


botao.addEventListener('click', limpar);
