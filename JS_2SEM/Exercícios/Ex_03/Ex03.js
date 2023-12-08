const paisSelecionado = document.querySelector('#paisSelecionado');
const infoPais = document.querySelector('#infoPais');

//Criando objeto
const informacoesPaises = {
    brasil: {
        nome: "Brasil",
        capital: "Brasília",
        populacao: "209 milhões",
        idioma: "Português"
    },
    eua: {
        nome: "Estados Unidos",
        capital: "Washington",
        populacao: "331 milhões",
        idioma: "Inglês"
    },
    canada: {
        nome: "Canadá",
        capital: "Ottawa",
        populacao: "37 milhões",
        idioma: "Inglês e Francês"
    },
    franca: {
        nome: "França",
        capital: "Paris",
        populacao: "67 milhões",
        idioma: "Francês"
    },
    japao: {
        nome: "Japão",
        capital: "Tóquio",
        populacao: "126 milhões",
        idioma: "Japonês"
    }

};


function atualizarinformacoesPais()
{
    const paisSelecionadoValue = paisSelecionado.value;
    const paisInfo = informacoesPaises[paisSelecionadoValue];

    infoPais.textContent = `País: ${paisInfo.nome}, Capital: ${paisInfo.capital}, População: ${paisInfo.populacao}, Idioma: ${paisInfo.idioma}`;
}

paisSelecionado.addEventListener('change', atualizarinformacoesPais);