var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";
function Enviar()
{
    var nome = document.querySelector("#nomeCompleto").value;
    var idade = parseInt(document.querySelector("#inputidade").value);
    var cidade = document.querySelector('#cidade').value;
    
    var validaCampos = validar(nome, idade, cidade);
    if(validaCampos == true)
    {
        return
    }

    barraProgresso.style.display = "block";
    mostrarBarra(nome, idade, cidade)
}

function validar(nome, idade, cidade){
    if(nome == "" || idade == "" || cidade == "")
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger show text-center">
        <span>Preencha todos os campos</span>
        <button type="button" class="close" data-bs-dismiss="alert">
            <span>&times;</span>
        </button>
    </div>`;
    return true;
    }else{
        var validandoIdade = validarIdade(idade);
        if(validandoIdade === false){
            return false;
        }else{
            return true;
        }
    }
}

function validarIdade(idade){
    if(idade < 0 || idade > 150)
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger show text-center">
        <span>Idade invalida</span>
        <button type="button" class="close" data-bs-dismiss="alert">
            <span>&times;</span>
        </button>
        </div>`
        return true;
    }else{
        return false
    }
}
function mostrarBarra(nome, idade, cidade)
{
    var progress = 0;
    var barra = document.querySelector(".progress-bar");
    var intervalo = setInterval(function(){
    if (progress > 100){
        clearInterval(intervalo);
        barraProgresso.style.display = "none";
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-success show text-center">
        <span>${nome} de ${idade} anos, da cidade de ${cidade}</span>
        <button type="button" class="close" data-bs-dismiss="alert">
            <span>&times;</span>
        </button>
        </div>`;
    }else{
        progress++;
        barra.style.width = progress + "%";
    }
    },50);
}