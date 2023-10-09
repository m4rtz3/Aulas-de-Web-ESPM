let btn = document.getElementById("btn");
btn.addEventListener("click", Analise);

let salgados = []
let ingredientes = ["OVOS", "FARINHA", "AÇÚCAR", "CARNE"]
let qtdIngrediente = []
let precoIngrediente = []
let contador = 0

function Analise() {

    //nome do salgado
    let nm_Salgado = String((document.getElementById("salgadoNome").value).toUpperCase());

    if (!salgados.includes(nm_Salgado)) {
        salgados.push(nm_Salgado);
    }

    console.log(salgados)

    //ingredientes
    let nm_Ing = document.getElementById("ingredienteNome");
    contador++

    nm_Ing.innerHTML = "<label for='ingrediente' id='ingredienteNome'>" + ingredientes[contador] + "</label>";

    if(contador === 3) {
        contador = -1;
    }

    console.log(ingredientes)

    let qtd_Ing = parseInt(document.getElementById("ingredienteValor").value);
    qtdIngrediente.push(qtd_Ing);
    
    console.log(qtdIngrediente)

    //precoingrediente
    let prec_Ing = parseFloat(document.getElementById("precoIngrediente").value);
    precoIngrediente.push(prec_Ing);

    console.log(precoIngrediente)
}

let resete = document.getElementById("resete");
resete.addEventListener("click", Resete);

function Resete () {
    salgados = []
    ingredientes = ["OVOS", "FARINHA", "AÇÚCAR", "CARNE"]
    qtdIngrediente = []
    precoIngrediente = []
    contador = 0
}

let calcule = document.getElementById("calcule");
calcule.addEventListener("click", Calcule);

function Calcule () {
    let precoBase = 0;
    let valor = 0;

    for (let i = 0; i < ingredientes.length; i++) {
        valor = qtdIngrediente[i] * precoIngrediente[i]
        precoBase += valor;
    }

    alert(precoBase)
    console.log(precoBase)

    if (precoBase < 0) {
        alert("ERRO")
    }
}