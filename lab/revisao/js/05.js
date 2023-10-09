let btn = document.getElementById("btn");
btn.addEventListener("click", analise);

function analise() {
    let texto = String(document.getElementById("texto").value);

    let erre = "r";
    let textoNv = "";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        if (texto.charAt(i) === erre) {
            contador++;
            if (contador <= 1) {
                textoNv += "l";
            }
        } else {
            textoNv += texto.charAt(i);
            contador = 0;
        }


    }

    alert(textoNv)
}