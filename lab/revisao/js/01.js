let btn = document.getElementById("btn");
btn.addEventListener("click", Analise);

function Analise() {
    let string = String(document.getElementById("campoString").value);
    let sub = String(document.getElementById("campoSubstring").value);

    let contador = 0;
    let palavra = "";

    for (let i = 0; i < string.length; i++) {
        let letra = string.charAt(i);
        palavra += letra;

        if (palavra.length === sub.length) {
            if (palavra === sub) {
                contador++;
            }
            palavra = palavra.slice(1);
        }
    }

    let campoFinal = document.getElementById("ocorrencia");
    campoFinal.innerHTML = "<p>Número de ocorrências: " + contador + "</p>";
}