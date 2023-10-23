const formulario = document.querySelector("form");

formulario.rbPizza.addEventListener("click", () => {
    formulario.inPizza.className = "exibe"
    formulario.inBebida.className = "oculta"
});

formulario.rbBebida.addEventListener("click", () => {
    formulario.inPizza.className = "oculta"
    formulario.inBebida.className = "exibe"
});

formulario.inDetalhes.addEventListener("focus", () => {
    document.getElementById("inDetalhes").placeholder = "Bom almoço!"

    if (formulario.rbPizza.checked) {
        let index = formulario.inPizza.selectedIndex;
        valorP = formulario.inPizza.options[index].value

        if (valorP == "media") {
            formulario.inDetalhes.placeholder = "Adicione até 2 sabores"
        } else if (valorP == "grande") {
            formulario.inDetalhes.placeholder = "Adicione até 3 sabores"
        } else {
            formulario.inDetalhes.placeholder = "Adicione 4 quatro sabores"
            //let num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        }
    }

});

formulario.inDetalhes.addEventListener("blur", () => {
    document.getElementById("inDetalhes").placeholder = ""
});

const mensagem = document.querySelector("pre")
let cont = 0
let opcaoAtual = ""
let opcaoP = ""
let opcaoR = ""
let nmrPedido = ""

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    if (formulario.rbPizza.checked) {
        let index = formulario.inPizza.selectedIndex;
        opcaoP = formulario.inPizza.options[index].text
    }

    if (formulario.rbBebida.checked) {
        let index = formulario.inBebida.selectedIndex;
        opcaoR = formulario.inBebida.options[index].text
    }

    let escrito = ""
    escrito = document.getElementById("inDetalhes").value;

    if (opcaoP !== opcaoAtual) {
        nmrPedido++
        cont = 0
        mensagem.innerHTML += "<hr>"
        mensagem.innerHTML += "Pedido nº " + nmrPedido;
    }


    if (cont == 0) {
        mensagem.innerHTML += "<p> Pizza: " + opcaoP + "</p>"
    } else if (cont == 1) {
        mensagem.innerHTML += "<p> Bebida: " + opcaoR + "</p>"
    } else {
        mensagem.innerHTML += "<p> Detalhe: " + escrito + "</p>"
    }

    cont++
    opcaoAtual = opcaoP;

});