let botao = document.getElementById("clique");
botao.addEventListener("click", Registro);

let botaoL = document.getElementById("liste");
botaoL.addEventListener("click", Lista);

let botaoF = document.getElementById("fature");
botaoF.addEventListener("click", Faturamento);

let botaoP = document.getElementById("procure");
botaoP.addEventListener("click", Procura_Exiba);

let aluguel_carros = []

function Registro() {
    let campoNome = String(document.getElementById("nomeInput").value.toUpperCase());
    let campoModelo = String(document.getElementById("modeloInput").value.toUpperCase());
    let campoDataIn = String(document.getElementById("datInInput").value);
    let campoDataTer = String(document.getElementById("datTermInput").value);
    let campoValor = Number(document.getElementById("valorInput").value);

    class Aluguel_de_Carro {
        constructor(nome_cliente, modelo_carro_alugado, data_inicio, data_termino, valor_aluguel) {
            this.nome_cliente = String(campoNome)
            this.modelo_carro_alugado = String(campoModelo)
            this.data_inicio = String(campoDataIn)
            this.data_termino = String(campoDataTer)
            this.valor_aluguel = Number(campoValor)
        }
    }

    let a = new Aluguel_de_Carro();
    aluguel_carros.push(a)
}

function Lista() {
    console.log("ALUGUÉIS:")
    console.log(aluguel_carros)
}

function Faturamento() {
    let pSomas = []
    let ftrm = 0;

    for (let i = 0; i < aluguel_carros.length; i++) {
        let diferenca = 0;
        let conta = 0;

        let dia1 = parseInt(aluguel_carros[i].data_inicio.replaceAll('-', ''));
        let dia2 = parseInt(aluguel_carros[i].data_termino.replaceAll('-', ''));

        diferenca = Math.abs(dia1 - dia2);
        console.log(diferenca)
        /* dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24))
        console.log(dias) */
        conta = diferenca * aluguel_carros[i].valor_aluguel;
        pSomas.push(conta)
    }

    ftrm = pSomas.reduce((ftrm, pSomas) => ftrm + pSomas, 0);
    console.log("Faturamento total: " + ftrm)
}

function Procura_Exiba() {
    let nomeProcurado = String(prompt("Qual o nome do cliente do qual você procura o aluguel?"))
    nomeProcurado = nomeProcurado.toUpperCase();

    let exiba = document.getElementById("exibir")
    exiba.innerHTML = ""
    let aluguel = [];
    let indice = 0;

    for (let i = 0; i < aluguel_carros.length; i++) {
        if (aluguel_carros[i].nome_cliente === nomeProcurado) {
            aluguel = aluguel_carros[i];
            indice = i
            break
        }
    }

    console.log(aluguel)

    exiba.innerHTML = `
    <p>Nome do cliente: ${aluguel_carros[indice].nome_cliente} </p>
    <p>Modelo do carro alugado: ${aluguel_carros[indice].modelo_carro_alugado} </p>
    <p>Data de início do aluguel: ${aluguel_carros[indice].data_inicio} </p>
    <p>Data de término do aluguel: ${aluguel_carros[indice].data_termino} </p>
    <p>Valor diária do aluguel: ${aluguel_carros[indice].valor_aluguel} </p>
    `;
}