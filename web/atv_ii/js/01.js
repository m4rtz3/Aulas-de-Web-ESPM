let numeros = [1, 2, 3, 4, 5, 6];
let letras = ["A", "B", "C", "D", "E"];
let comparar = [];
let nmrFalta = 0;

const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let todosValidos = true;

    for (let i = 0; i < letras.length; i++) {
        let campo = parseInt(document.getElementById("campoVlr" + letras[i]).value);

        if (numeros.includes(campo)) {
            comparar.push(campo);
        } else {
            todosValidos = false;
            break;
        }
    }

    if (!todosValidos || comparar.length !== numeros.length - 1) {
        alert("Digite os números de 1 a 6, sem repetições!");
        return;
    }

    comparar.sort();

    for (let k = 0; k < comparar.length; k++) {
        if (comparar[k] !== numeros[k]) {
            nmrFalta = numeros[k];
            break;
        }
    }

    let div = document.getElementById("valor");
    div.innerHTML = `<p>O valor da carta que falta é a ${nmrFalta}<p>`;

    comparar = [];
    nmrFalta = 0;
});