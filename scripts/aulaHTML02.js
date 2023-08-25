let botao = document.getElementById("submit");
botao.addEventListener("click", Verificar);

function Verificar() {
    let paragrafo = document.getElementById("mensagem");
    let nomeUser = document.getElementById("campoNome").value;

    paragrafo.innerHTML = "Bem vindo(a) " + nomeUser + "!";

    //para nao att
}