let botao = document.getElementById("botao");
botao.addEventListener("click", conversaoAtv);

function conversaoAtv () {
    let campoDoNmr = document.getElementById("campoTemp").value;
    let campoDoTp = (document.getElementById("campoTpTemp").value).toLowerCase();

    if ((campoDoTp == "fahrenheit") || (campoDoTp == "f")) {
        fToC(campoDoNmr);
    } else if ((campoDoTp == "celsius") || campoDoTp == "c") {
        cToF(campoDoNmr);
    } else {
        alert("Você digitou o tipo de temperatura errado.")
    }
}

function fToC (campoDoNmr) {
    let conversaoFinal = document.getElementById("conversao");

    let equacao1 = campoDoNmr - 32;
    let equacao2 = equacao1 * 5;
    let fah = equacao2 / 9;

    conversaoFinal.innerHTML = fah.toFixed(2) + " ºF<p>Convertido de Fahrenheit para Celsius</p>";
}

function cToF (campoDoNmr) {
    let conversaoFinal = document.getElementById("conversao");

    let equacao1 = 1.8 * campoDoNmr;
    let cel = equacao1 + 32;

    conversaoFinal.innerHTML = cel.toFixed(2) + " ºC<p>Convertido de Celsius para Fahrenheit</p>";
}