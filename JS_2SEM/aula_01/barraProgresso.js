function animarBarraProgresso()
{
    //Declarando as variáveis e atribuindo os valores atrvés dos elementos da DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/mili.jpg?resize=700%2C500&ssl=1")`
        }else{
            progresso++;
            barra.css("width", progresso + "%");
        }
    },100);
}