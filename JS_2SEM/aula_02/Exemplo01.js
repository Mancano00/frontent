//Selecionando botão pelo id
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador');

//iniciando contador
let contador = 0;

//função que será chamada pelo eventListener
function contando()
{
    contador++
    contadorElemento.textContent = contador
}

//Adicionando ouvinte do evento de click
botao.addEventListener('click', contando);