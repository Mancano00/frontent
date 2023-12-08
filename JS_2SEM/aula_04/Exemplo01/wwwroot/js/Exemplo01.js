var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

    datasets: [{
        label: 'Vendas 2023',
        backgroundColor: 'rgba(255, 10, 100, 1)',
        borderColor: 'rgba(0, 0, 0,1)',
        borderWidth: 2,
        data: [12, 18, 3 ,5, 2, 3.5, 4, 8, 14, 10, 6, 4.8]
    },
    {
        label: 'Vendas 2022',
        backgroundColor: 'rgba(255,150, 0, 1)',
        borderColor: 'rgba(0, 0, 0,1)',
        borderWidth: 2,
        data: [6, 3, 16 , 15, 20, 7.5, 7, 2, 12, 4, 9, 5.2]
    },
    {
        label: 'Vendas 2021',
        backgroundColor: 'rgba(210, 210, 210, 1)',
        borderColor: 'rgba(0, 0, 0,1)',
        borderWidth: 2,
        data: [12, 18, 3 ,5, 2, 3.5, 4, 8, 14, 10, 6, 4.8]
    },
    {
        label: 'Vendas 2020',
        backgroundColor: 'rgba(100,0, 200, 1)',
        borderColor: 'rgba(0, 0, 0,1)',
        borderWidth: 2,
        data: [6, 3, 16 , 15, 20, 7.5, 7, 2, 12, 4, 9, 5.2]
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var ctx = document.querySelector('#grafico').getContext('2d')
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});