const btnAumentar = document.querySelector('#aumentar');
const btnDiminuir = document.querySelector('#diminuir');
const btnZerar = document.querySelector('#zerar');

const contadorElemento = document.querySelector('#contador');

let contador = 0;

function aumentar()
{
    contador++
    contadorElemento.textContent = contador
}

function diminuir()
{
    if(contador <= 0)
    {
        alert("Contador está zerado");
    }else
    {
        contador--;
        contadorElemento.textContent = contador;
    }
}

function zerar()
{
    contador = 0
    contadorElemento.textContent = contador;
}

btnAumentar.addEventListener('click',aumentar);
btnDiminuir.addEventListener('click',diminuir);
btnZerar.addEventListener('click',zerar);



