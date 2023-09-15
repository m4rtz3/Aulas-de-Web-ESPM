//FUNCIONALIDADE

//CAMPO
let campoAlerta = '<label for="alertinha" id="campo">Digite o valor do pacote:</label>';
campoAlerta += '<input type="text" name="alertinha" id="campinhoPacote"> <button id="valorCheck">Valor</button>';

let campo = document.getElementById("alertasDois");
campo.innerHTML = campoAlerta;
//FIM DO CAMPO

let valorDoPacote = 0;

let botaoValorCheck = document.getElementById("valorCheck");
botaoValorCheck.addEventListener("click", pegarValorPacote);

function pegarValorPacote() {
    valorDoPacote = document.getElementById("campinhoPacote").value.trim();
    imprimirValores(mbsClientes, valorDoPacote);
}

function visibilidade() {
    document.getElementById("matrizOfic").style.visibility = "visible";
}

//ARMAZENAR DADOS

let botaoAr = document.getElementById("botao_armazenar");
botaoAr.addEventListener("click", armazeneNomes);

let nomesClientes = [];
let cpfsClientes = [];
let mbsClientes = [];
let valoresPacote = [];

function armazeneNomes() {

    let campoDoNome = (document.getElementById("campoNome").value).toUpperCase();

    if (campoDoNome.trim() === "") {

        document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
        document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

        //CAMPO
        let campoAlerta = '<p>Insira um nome válido!</p>';

        let campo = document.getElementById("alertas");
        campo.innerHTML = campoAlerta;
        //FIM DO CAMPO
        return;
    }

    let campoDoCPF = document.getElementById("campoCPF").value;

    if (campoDoCPF.length !== 11 || isNaN(campoDoCPF)) {

        document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
        document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

        //CAMPO
        let campoAlerta = '<p>Insira um CPF válido!</p>';

        let campo = document.getElementById("alertas");
        campo.innerHTML = campoAlerta;
        //FIM DO CAMPO

        return;

    } else if (cpfsClientes.includes(campoDoCPF)) {

        document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
        document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

        //CAMPO
        let campoAlerta = '<p>Já há esse CPF cadastrado!</p>';

        let campo = document.getElementById("alertas");
        campo.innerHTML = campoAlerta;
        //FIM DO CAMPO

        return;
    }

    let campoDoMB = document.getElementById("campoMB").value;

    if (isNaN(campoDoMB)) {

        document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
        document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

        //CAMPO
        let campoAlerta = '<p>Valor Inválido!</p>';

        let campo = document.getElementById("alertas");
        campo.innerHTML = campoAlerta;
        //FIM DO CAMPO
        return;
    }

    nomesClientes.push(campoDoNome);
    cpfsClientes.push(campoDoCPF);
    mbsClientes.push(campoDoMB);

    imprimirValores(mbsClientes);
    visibilidade();

    atualizarTabela();
}

//IMPRIMIR VALORES PACOTE
function imprimirValores(mbsClientes, valorDoPacote) {
    valoresPacote = [];

    for (let i = 0; i < mbsClientes.length; i++) {
        let valorDoExtra = mbsClientes[i] * valorDoPacote * ((3 / 100) / 200);
        valoresPacote.push(valorDoExtra.toFixed(2));
    }
    visibilidade();
    atualizarTabela();
}

//PROCURAR CLIENTE
let botaoPcli = document.getElementById("botao_cliente");
botaoPcli.addEventListener("click", procurarCliente);

function procurarCliente() {

    document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
    document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

    //CAMPO
    let campoAlerta = '<label for="alertinha" id="campo">Procure o cliente pelo CPF dele: </label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check">Checar</button>';

    let campo = document.getElementById("alertas");
    campo.innerHTML = campoAlerta;
    //FIM DO CAMPO

    let botaoChecar = document.getElementById("check");
    botaoChecar.addEventListener("click", function () {

        let pesquisa = document.getElementById("campinho").value.trim();
        let nomeAchado = "";

        for (let i = 0; i < cpfsClientes.length; i++) {
            if (cpfsClientes[i] === pesquisa) {
                nomeAchado = nomesClientes[i];

                //CAMPO
                let campoResultado = '<label for="alertinha" id="campo">Esse é o cliente desse nome: </label>';
                campoResultado += '<p>' + nomeAchado + '</p>';

                campo.innerHTML = campoResultado;
                break;
                //FIM DO CAMPO
            }
        }

        visibilidade();
        atualizarTabela();
    });
}

//ALTERAR DADOS

let botaoAlt = document.getElementById("botao_alterar");
botaoAlt.addEventListener("click", alterarDados);

function alterarDados() {

    document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
    document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

    //CAMPO
    let campoAlerta = '<label for="alertinha" id="campo">Qual dos campos você deseja alterar? [nome/mb]: </label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check">Checar</button>';

    let campo = document.getElementById("alertas");
    campo.innerHTML = campoAlerta;
    //FIM DO CAMPO

    let botaoChecar = document.getElementById("check");
    botaoChecar.addEventListener("click", function () {
        let alteracao = document.getElementById("campinho").value.toLowerCase();
        campo.innerHTML = "";

        if (alteracao === "nome") {
            alterarNome();
        } else if (alteracao === "mb") {
            alterarMB();
        } else {
            //CAMPO
            let campoAlerta = '<p>Inválido!</p>';

            let campo = document.getElementById("alertas");
            campo.innerHTML = campoAlerta;
            //FIM DO CAMPO
        }
    });
}

let nomeAnterior = "";
let nomeNovo = "";
let pesquisaCPF = "";

//ALTERAR NOME

function alterarNome() {
    //CAMPO
    let campoAlerta = '<label for="alertinha" id="campo">Qual é o nome do cliente que você deseja alterar?</label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho1">';

    campoAlerta += '<label for="alertinha" id="campo">Digite o CPF do cliente que você deseja encontrar:</label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho2"> <button id="check2">Checar</button>';

    let campo = document.getElementById("alertas");
    campo.innerHTML = campoAlerta;
    //FIM DO CAMPO

    let botaoCheckNome1 = document.getElementById("check2");
    botaoCheckNome1.addEventListener("click", function () {
        nomeAnterior = document.getElementById("campinho1").value.trim().toUpperCase();
        pesquisaCPF = document.getElementById("campinho2").value.trim();
        analiseNomes2(nomeAnterior, pesquisaCPF);
    });
}

let verificarAnaliseNome = "";
let indiceNome = 0;

function analiseNomes2(nomeAnterior, pesquisaCPF) {
    let nomeEncontrado = false;
    let i;

    for (i = 0; i < nomesClientes.length; i++) {
        if (nomesClientes[i] === nomeAnterior && cpfsClientes[i] === pesquisaCPF) {
            nomeEncontrado = true;
            indiceNome = i;

            //CAMPO
            let campoAlerta = '<label for="alertinha" id="campo">Você deseja alterar o nome do cliente ' + nomeAnterior + ' de CPF: ' + pesquisaCPF + '? [s/n]</label>';
            campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check4">Checar</button>';

            let campo = document.getElementById("alertas");
            campo.innerHTML = campoAlerta;
            //FIM DO CAMPO

            let botaoCheck4 = document.getElementById("check4");
            botaoCheck4.addEventListener("click", function () {
                verificarAnaliseNome = document.getElementById("campinho").value.trim().toLowerCase();

                if (verificarAnaliseNome === "s" || verificarAnaliseNome === "sim") {

                    //CAMPO
                    let campoAlerta = '<label for="alertinha" id="campo">Digite o novo nome:</label>';
                    campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check5">Checar</button>';

                    let campo = document.getElementById("alertas");
                    campo.innerHTML = "";
                    campo.innerHTML += campoAlerta;
                    //FIM DO CAMPO

                    let botaoCheck5 = document.getElementById("check5");
                    botaoCheck5.addEventListener("click", function () {
                        nomeNovo = document.getElementById("campinho").value.trim().toUpperCase();
                        nomesClientes[indiceNome] = nomeNovo;
                        campo.innerHTML = "";
                        document.getElementById("alertas").style.border = "none";
                        document.getElementById("alertas").style.backgroundColor = "none";

                        visibilidade();
                        atualizarTabela();
                    });
                }
            });
        }
    }

    if (!nomeEncontrado) {
        //CAMPO
        let campoAlerta = '<p>Nome não encontrado!</p>';

        let campo = document.getElementById("alertas");
        campo.innerHTML = campoAlerta;
        //FIM DO CAMPO
    }
}

let MBAnterior = ""
let MBNovo = ""
let verificarAnaliseMB = ""
let indiceMB = 0;
let nomeDoCliente = ""

//ALTERAR MB

function alterarMB() {
    //CAMPO
    let campoAlerta = '<label for="alertinha" id="campo">Qual é o nome do cliente que você deseja alterar?</label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho1">';

    campoAlerta += '<label for="alertinha" id="campo">Digite o CPF do cliente que você deseja encontrar:</label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho2"> <button id="check2">Checar</button>';

    let campo = document.getElementById("alertas");
    campo.innerHTML = campoAlerta;
    //FIM DO CAMPO

    let botaoCheckNome1 = document.getElementById("check2");
    botaoCheckNome1.addEventListener("click", function () {
        nomeDoCliente = document.getElementById("campinho1").value.trim().toUpperCase();

        indiceMB = nomesClientes.indexOf(nomeDoCliente);
        MBAnterior = mbsClientes[indiceMB];

        pesquisaCPF = document.getElementById("campinho2").value.trim();
        analiseMB2(MBAnterior, pesquisaCPF);
    });
}

function analiseMB2(MBAnterior, pesquisaCPF) {
    let dadoEncontrado = false;
    let i;

    for (i = 0; i < nomesClientes.length; i++) {
        if (mbsClientes[i] === MBAnterior && cpfsClientes[i] === pesquisaCPF) {
            dadoEncontrado = true;
            indiceNome = i;

            //CAMPO
            let campoAlerta = '<label for="alertinha" id="campo">Você deseja alterar o dado de MB extra: ' + MBAnterior + ' da pessoa de CPF: ' + pesquisaCPF + '? [s/n]</label>';
            campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check4">Checar</button>';

            let campo = document.getElementById("alertas");
            campo.innerHTML = campoAlerta;
            //FIM DO CAMPO

            let botaoCheck4 = document.getElementById("check4");
            botaoCheck4.addEventListener("click", function () {
                verificarAnaliseMB = document.getElementById("campinho").value.trim().toLowerCase();

                if (verificarAnaliseMB === "s" || verificarAnaliseMB === "sim") {

                    //CAMPO
                    let campoAlerta = '<label for="alertinha" id="campo">Digite o novo dado:</label>';
                    campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check5">Checar</button>';

                    let campo = document.getElementById("alertas");
                    campo.innerHTML = "";
                    campo.innerHTML += campoAlerta;

                    let botaoCheck5 = document.getElementById("check5");
                    botaoCheck5.addEventListener("click", function () {
                        MBNovo = document.getElementById("campinho").value.trim().toUpperCase();
                        mbsClientes[indiceMB] = MBNovo;
                        campo.innerHTML = "";
                        document.getElementById("alertas").style.border = "none";
                        document.getElementById("alertas").style.backgroundColor = "none";

                        visibilidade();
                        atualizarTabela();
                    });
                }
            });
        }
    }

    if (!dadoEncontrado) {
        //CAMPO
        let campoAlerta = '<p>Dado não encontrado!</p>';

        let campo = document.getElementById("alertas");
        campo.innerHTML = campoAlerta;
        //FIM DO CAMPO
    }
}

//REMOVER DADOS

let botaoRmr = document.getElementById("botao_remover");
botaoRmr.addEventListener("click", removerDados);

function removerDados() {
    document.getElementById("alertas").style.border = "solid 2px rgb(91, 83, 11)";
    document.getElementById("alertas").style.backgroundColor = "rgb(215, 215, 193)";

    //CAMPO
    let campoAlerta = '<label for="alertinha" id="campo">Qual o nome do cliente que você deseja remover os dados?</label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho1">';

    campoAlerta += '<label for="alertinha" id="campo">Digite o CPF do cliente que você deseja remover:</label>';
    campoAlerta += '<input type="text" name="alertinha" id="campinho2"> <button id="check">Checar</button>';

    let campo = document.getElementById("alertas");
    campo.innerHTML = campoAlerta;
    //FIM DO CAMPO

    let botaoCheckRmv = document.getElementById("check");
    botaoCheckRmv.addEventListener("click", function () {
        let nomeRemover = document.getElementById("campinho1").value.trim().toUpperCase();
        let pesquisaCPF = document.getElementById("campinho2").value.trim();
        let dadoEncontrado = false;

        for (let i = 0; i < nomesClientes.length; i++) {
            if (nomesClientes[i] === nomeRemover && cpfsClientes[i] === pesquisaCPF) {
                //CAMPO
                let campoAlerta = '<label for="alertinha" id="campo">Você deseja remover os dados de ' + nomesClientes[i] + ', de CPF: ' + cpfsClientes[i] + '? [s/n]</label>';
                campoAlerta += '<input type="text" name="alertinha" id="campinho"> <button id="check2">Checar</button>';

                let campo = document.getElementById("alertas");
                campo.innerHTML = campoAlerta;
                //FIM DO CAMPO

                let botaoRmvr2 = document.getElementById("check2");
                botaoRmvr2.addEventListener("click", function () {
                    let verificarDado = document.getElementById("campinho").value.trim().toLowerCase();

                    if (verificarDado === "s" || verificarDado === "sim") {
                        let indice = i;
                        nomesClientes.splice(indice, 1);
                        cpfsClientes.splice(indice, 1);
                        mbsClientes.splice(indice, 1);
                        valoresPacote.splice(indice, 1);

                        campo.innerHTML = ""
                        document.getElementById("alertas").style.border = "none";
                        document.getElementById("alertas").style.backgroundColor = "none";

                        visibilidade();
                        atualizarTabela();

                    }
                });

                dadoEncontrado = true;
                break;
            }
        }

        if (!dadoEncontrado) {
            //CAMPO
            let campoAlerta = '<p>Dado não encontrado!</p>';

            let campo = document.getElementById("alertas");
            campo.innerHTML = campoAlerta;
            //FIM DO CAMPO
        }
    });
}

//ARRAYS/TABELAS/MATRIZES
function atualizarTabela() {
    let tableHTML = '<tr>';
    tableHTML += '<th class="thHTML">NOME</th>';
    tableHTML += '<th class="thHTML">CPF</th>';
    tableHTML += '<th class="thHTML">MB EXTRAS</th>';
    tableHTML += '<th class="thHTML">VALOR DOS DADOS EXCENDENTES</th>';
    tableHTML += '</tr>';

    for (let i = 0; i < nomesClientes.length; i++) {
        tableHTML += '<tr>';
        tableHTML += '<td>' + nomesClientes[i] + '</td>';
        tableHTML += '<td>' + cpfsClientes[i] + '</td>';
        tableHTML += '<td>' + mbsClientes[i] + '</td>';
        tableHTML += '<td> R$' + valoresPacote[i] + '</td>';
        tableHTML += '</tr>';
    }

    let tabela = document.getElementById("matrizOfic");
    tabela.innerHTML = tableHTML;
}