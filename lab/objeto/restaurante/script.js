
const conteudo_reserva = document.getElementById("conteudo_reserva");
const conteudo_pesquisa = document.getElementById("conteudo_pesquisa");

let reserva = false;
let pesquisa = false;

function Conteudo_Reserva() {
    reserva = true;
    pesquisa = false;

    conteudo_reserva.style.display = "flex";
    conteudo_pesquisa.style.display = "none";
}

function Conteudo_Pesquisa() {
    pesquisa = true;
    reserva = false;

    conteudo_pesquisa.style.display = "flex";
    conteudo_reserva.style.display = "none";
}

//RESERVA DA MESA

let registro = document.getElementById("registro_reserva");
registro.addEventListener("click", Registro_Reserva);

let reservas = []
let espera = []

let limite = 0;
let nm = 0;

function Registro_Reserva() {


    let campoNome = (String(document.getElementById("nomeInput").value)).toUpperCase();
    let campoFone = parseInt(document.getElementById("telefoneInput").value)
    let campoPgmento = (String(document.getElementById("pgmentoInput").value)).toUpperCase();

    if (campoPgmento == "A VISTA" || campoPgmento == "AVISTA" || campoPgmento == "VISTA" || campoPgmento == "PARCELADO" || campoPgmento == "PARCELA") {

        class Reserva {
            constructor(nome, telefone, forma_pagamento) {
                this.nome = String(campoNome)
                this.telefone = parseInt(campoFone)
                this.forma_pagamento = String(campoPgmento)
            }
        }

        let a = new Reserva();

        if (limite === 5) {
            espera.push(a)
            alert(espera[nm].nome + " foi adicionado à lista de espera!")
            nm++
        } else {
            reservas.push(a)
            console.log(reservas)
            limite++
        }
    } else {
        alert("Não há essa opção ou digitou incorretamente")
    }
}

//PESQUISA DA MESA

let pesquisar = document.getElementById("pesquisar_reserva");
pesquisar.addEventListener("click", Pesquisa_Reserva);

function Pesquisa_Reserva() {
    let campoFone = parseInt(document.getElementById("telefoneInput").value);
    let aviso_pesquisa = document.getElementById("aviso_pesquisa");

    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].telefone === campoFone) {
            aviso_pesquisa.innerHTML = `Você tem uma reserva! Ela é a de número ${i + 1}`;
            break;
        }
    }
}