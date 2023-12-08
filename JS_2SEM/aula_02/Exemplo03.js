const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirSelecao");

//função para atualizar a cor
function atualizarCor()
{
    //Atribui o valor da seleção na variável
    const corSelecionadaValue = corSelecionada.value;
    
    exibirCor.textContent = `Cor selecionada: ${corSelecionada.value}`;

    //Usar cor no estilo da div
    exibirCor.style.color = corSelecionadaValue;
}

//Adicionando ouvinte de evento change
corSelecionada.addEventListener('change', atualizarCor);

atualizarCor();