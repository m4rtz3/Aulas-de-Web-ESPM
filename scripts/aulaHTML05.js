let botao = document.getElementById("botao");
botao.addEventListener("click", verificar);

function verificar() {
    let br = document.getElementById("br");

    if (br.checked) {
        document.write("BRASIL");
        window.print();
    }
}

function Mudar() {
    document.write("MUDANÇA");
}