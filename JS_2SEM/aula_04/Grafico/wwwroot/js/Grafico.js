// Função para criar o gráfico
function criarGrafico(data) {
    console.log(data);
    // Obtenha o contexto do elemento canvas
    var ctx = document.getElementById('meuGrafico').getContext('2d');

    // Mapeie os nomes como rótulos e populações como valores
    var nomes = data.map(item => item.nome);
    var populacoes = data.map(item => item.populacao);

     // Crie um array de cores aleatórias com base no número de barras no gráfico
     var coresAleatorias = [];
     for (var i = 0; i < data.length; i++) {
         var cor = `rgba(${Math.random() * 255}, ${Math.random() * 192}, ${Math.random() * 192}, 1)`;
         coresAleatorias.push(cor);
     }

    // Crie um novo gráfico
    new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (pode ser 'bar', 'line', 'pie', etc.)
        data: {
            labels: nomes, // Rótulos do eixo X
            datasets: [{
                label: 'Populacao Paises',
                backgroundColor: coresAleatorias,
                borderColor: 'rgba(0, 0, 0, 1)', // Cor da borda
                borderWidth: 1,
                data: populacoes // Valores do eixo Y
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para fazer uma solicitação AJAX e obter os dados do controlador
function obterDadosParaGrafico() {
    fetch('/Pais/ObterDadosParaGrafico')
        .then(response => response.json())
        .then(data => {
            // Chame a função criarGrafico com os dados obtidos
            criarGrafico(data);
        });
}

// Chame a função para obter os dados e criar o gráfico
obterDadosParaGrafico();