let btn = document.getElementById("btn");

btn.addEventListener("click", analise);

function analise() {
    let numero = parseInt(document.getElementById("numeroAnalise").value);

    let numeroAnalise = document.getElementById("numerovendo");
    numeroAnalise.innerText = numero;
    
    let analiseConcl = document.getElementById("analiseConc");

    if (numero === 1) {
        numero = "STOP";
    } else if (numero % 2 === 1) {
        numero = (3 * numero) + 1;
    } else {
        numero = numero / 2;
    }

    analiseConcl.innerText = numero;
}