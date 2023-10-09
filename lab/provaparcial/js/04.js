let nomes = [];
let consumoJul = [];
let consumoAg = [];
let consumoSet = [];
let custos = [];

let qtdConsumidores = 0;

function Qtd() {
    qtdConsumidores = parseInt(document.getElementById("qtdCons").value)

    let campo = document.getElementById("consumidor")
    let meses = ["julho", "agosto", "setembro"]

    campo.innerHTML = ""

    for (let i = 0; i < qtdConsumidores; i++) {
        campo.innerHTML += "<label for='nomeConsu'>Nome:</label>";
        campo.innerHTML += "<input type='text' name='nomeConsu' class='nome' />";
        campo.innerHTML += "<p></p>";

        for (let j = 0; j < meses.length; j++) {
            campo.innerHTML += "<label for='consumo'>Consumo em " + meses[j] + ":</label>";
            campo.innerHTML += "<input type='number' name='consumo' class='consumo' />";
            campo.innerHTML += "<p></p>";
        }

        campo.innerHTML += "<hr>";
    }

    let botao_armazenar = document.getElementById("armazenar");
    botao_armazenar.style.visibility = "visible";
}

function armazenar() {
    let nomesInputs = document.querySelectorAll(".nome");
    let consumoInputs = document.querySelectorAll(".consumo");

    for (let i = 0; i < nomesInputs.length; i++) {
        let nomeConsumidor = nomesInputs[i].value.toUpperCase();
        nomes.push(nomeConsumidor);

        let julConsumo = parseInt(consumoInputs[i * 3].value);
        consumoJul.push(julConsumo);

        let agostoConsumo = parseInt(consumoInputs[i * 3 + 1].value);
        consumoAg.push(agostoConsumo);

        let setembroConsumo = parseInt(consumoInputs[i * 3 + 2].value);
        consumoSet.push(setembroConsumo);
    }

    calculo()
}

function calculo() {

    let campo = document.getElementById("consumidor");
    campo.innerHTML = ""

    let valor = document.getElementById("valorVigente")

    valor.innerHTML += "<label for='valor'>Valor Vigente:</label>";
    valor.innerHTML += "<input type='number' name='valor' id='vlr' />";
    valor.innerHTML += "<button onclick='calcular2()'> Cálculo </button>";

    let botao_armazenar = document.getElementById("armazenar");
    botao_armazenar.style.visibility = "hidden";

    let botao_qtd = document.getElementById("qtdd");
    botao_qtd.style.visibility = "hidden";

}

function calcular2() {
    let vlr = document.getElementById("vlr").value;

    let custo = 0

    for (let j = 0; j < qtdConsumidores; j++) {

        console.log("NOME:" + nomes[j])

        for (let i = 0; i < qtdConsumidores; i++) {
            custo = 3 / 100 * consumoJul[i] * 1 / 350 * vlr;
            custos.push(custo)
            console.log("CONSUMO PREÇO DE JULHO:" + custo.toFixed(2))

            custo = 3 / 100 * consumoAg[i] * 1 / 350 * vlr;
            console.log("CONSUMO PREÇO DE AGOSTO:" + custo.toFixed(2))
            custos.push(custo)

            custo = 3 / 100 * consumoSet[i] * 1 / 350 * vlr;
            console.log("CONSUMO PREÇO DE SETEMBRO:" + custo.toFixed(2))
            custos.push(custo)
        }

        let botao_comp = document.getElementById("comparar");
        botao_comp.style.visibility = "visible";
    }
}

function comparar() {
    let maiorGasto = -1;
    let consumidorMaiorGasto = "";

    for (let j = 0; j < qtdConsumidores; j++) {
        if (custos[j] > maiorGasto) {
            maiorGasto = custos[j];
            let indice = custos.indexOf(maiorGasto)
            consumidorMaiorGasto = nomes[indice]
        }
    }

    console.log("O consumidor com o maior gasto no trimestre é: " + consumidorMaiorGasto);
}